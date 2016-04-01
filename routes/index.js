'use strict';
const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next){
  let hostname= req.headers.host;
  res.render('index', { title: 'FreeCodeCamp API Basejump:',hostname:hostname})
});



router.get('/api/timestamp/', function(req, res, next){
    let hostname= req.headers.host;
  res.render('timestamp', { title: 'FreeCodeCamp API Basejump: Timestamp Microservice' ,hostname:hostname})
});


router.get('/api/urlShortner/', function(req, res, next) {
  let hostname= req.headers.host;
  res.render('urlShortner', { title: 'FreeCodeCamp API Basejump: URL Shortner Microservice',hostname:hostname});
});

router.get('/api/imagesearch', function(req, res, next) {
  let hostname= req.headers.host;
  res.render('imagesearch', { title: 'FreeCodeCamp API Basejump: Image Search',hostname:hostname});
});

module.exports = router;
