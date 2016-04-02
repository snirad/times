'use strict';
const express = require('express');
const router = express.Router();
const multer = require('multer');



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
router.get('/api/filemetadata', function(req, res, next) {
  res.render('filemetadata', { title: 'FreeCodeCamp API Basejump: FileMetadata'});
});
router.post('/api/filemetadata', multer({ storage: multer.memoryStorage() }).single('upl'), function(req,res){
     res.json(`${req.file.size} bytes`);
    res.status(204).end();
});

module.exports = router;
