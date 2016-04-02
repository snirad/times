'use strict';
const express = require('express');
const validator = require('validator');
const util = require('util');
const Postgre = require('../utils/postgre');
const Randomnum = require('../utils/randomNum');
const router = express.Router();


function urlShortner(request, response) {
    let prefix = request.params.query;
    if (parseInt(prefix)) {
        redirectURL(parseInt(prefix), response)
    } else {
        let url = request.url.slice(17);
        if (!validator.isURL(url)) return response.json({"Error": "Invalid URL"});
        let num = Randomnum.generateRandom();
        let shorturl = 'https://' +request.headers.host + '/api/urlShortner/' + num;
        Postgre.queryPostgre(`insert into shorturl.url VALUES(${num},'${url}')`).then(()=> {
            return response.json({
                "original_url": url,
                "short_url": shorturl
            }).catch((err)=>response.json(err))
        })
    }
}

/***
 * 
 * @param number: an Integer, for finding the correct target url.
 * @param response: response with the new destination.
 */
function redirectURL(number, response) {
    Postgre.queryPostgre(`select url from shorturl.url where id = ${number}`)
        .then((data)=> response.redirect(data[0].url))
        .catch((err) => response.json(err))
}

router.get('/api/urlShortner/:query*', urlShortner);

module.exports = router;

