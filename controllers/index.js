var express = require('express');
var path = require('path');
var logger = require('morgan');

var fs = require('fs');


var router = express.Router();

function getExtension(filename) {
    var ext = path.extname(filename || '').split('.');
    return ext[ext.length - 1];
}


fs.readdirSync(__dirname).forEach(function (file) {
    var name;
    if (file == path.basename(__filename))
        return;
    if (getExtension(file) != "js")
        return;
    name = path.basename(file, ".js");
   // logger.debug("Loading Controller: " + name);
    router.use(require(__dirname + "/" + file));
});



module.exports = router;