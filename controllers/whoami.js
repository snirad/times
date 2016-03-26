'use strict';
const expres = require('express');
const router = expres.Router();


function whoami(request,response){
    return response.json({
     "ipaddress": request.connection.remoteAddress,
     "language":request.headers['accept-language'],
     "software":request.headers['user-agent']})
}


router.get('/api/whoami/',whoami);

module.exports= router;