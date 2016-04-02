'use strict';
const express = require('express');
const router = express.Router();
const Postgre = require('../utils/postgre');
const Gooapis = require('../utils/gooapis');

function imageSearch(request,response){
    let offset = request.query['offset'] || 10
        ,query = request.params.query;
    Postgre.queryPostgre(`insert into imagesearch.archive values ('${query}')`).then(()=>{
        let arr = [];
        while((offset % 10 > 0 && offset /10 != 0) || offset >= 10 ){
            offset > 10 ? arr.push(Gooapis.getImages(10,query)) : arr.push(Gooapis.getImages(offset,query));
            offset-=10;
        }
        return Promise.all(arr);
    }).then((result)=>{
        console.log(result);
        return response.json(result);
    }).catch(err => err);
}

/***
 * 
 * @param request: no being used.
 * @param response: response with top 10 
 */
function getLatest(request,response){
    Postgre.queryPostgre(`select * from imagesearch.archive order by my_timestamp desc limit 10;`)
        .then((data)=> response.json(data))
        .catch(err => err);
}





router.get('/api/imagesearch/:query', imageSearch);
router.get('/api/latest/imagesearch',getLatest);


module.exports = router;