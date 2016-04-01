'use strict';
const express = require('express');
const router = express.Router();
const Postgre = require('../utils/postgre');
const Gooapis = require('../utils/gooapis');

function imageSearch(request,response){
    let offset = request.query['offset'] || 10
        ,query = request.params.query;
    Postgre.queryPostgre(`insert into imagesearch.archive values ('${query}')`).then(()=>{
        return Gooapis.getImages(offset,query);
    }).then((result)=>{
        return response.json(result);
    }).catch(err => err);
}

function getLatest(request,response){
    Postgre.queryPostgre(`select * from imagesearch.archive limit 10;`)
        .then((data)=> response.json(data))
        .catch(err => err);
}





router.get('/api/imagesearch/:query', imageSearch);
router.get('/api/latest/imagesearch',getLatest);


module.exports = router;