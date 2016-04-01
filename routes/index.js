'use strict';
const express = require('express');
const router = express.Router();


router.get('/api/timestamp/', function(req, res, next){
    let hostname= req.headers.host;
  res.render('index', { title: 'FreeCodeCamp API Basejump: Timestamp Microservice' ,hostname:hostname})
});


router.get('/api/urlShortner/', function(req, res, next) {
  let hostname= req.headers.host;
  res.render('urlShortner', { title: 'FreeCodeCamp API Basejump: URL Shortner Microservice',hostname:hostname});
});

module.exports = router;
