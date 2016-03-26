var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'FreeCodeCamp API Basejump: Timestamp Microservice' });
});

module.exports = router;
