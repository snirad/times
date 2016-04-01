var express = require('express');
var router = express.Router();


router.get('/api/timestamp/', function(req, res, next) {
  res.render('index', { title: 'FreeCodeCamp API Basejump: Timestamp Microservice' });
});


router.get('/api/urlShortner/', function(req, res, next) {
  res.render('urlShortner', { title: 'FreeCodeCamp API Basejump: URL Shortner Microservice' });
});

module.exports = router;
