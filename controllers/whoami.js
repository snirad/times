'use strict';
const expres = require('express');
const router = expres.Router();


function whoami(request,response){
    return response.json({
     "ipaddress": request.headers['x-forwarded-for'] ||
     request.connection.remoteAddress ||
     request.socket.remoteAddress ||
     request.connection.socket.remoteAddress,
     "language":request.headers['accept-language'].split(',')[0],
     "software":request.headers['user-agent'].split(') ')[0].split(' (')[1]})
}


router.get('/api/whoami/',whoami);

module.exports= router;