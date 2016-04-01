'use strict';

const express = require('express');
const moment = require('moment');
const router = express.Router();


function returntimestamp(request, response) {

    var timestamp = request.params.query;
    if (parseInt(timestamp)) {
        timestamp = parseInt(timestamp);
    }

    if ((new Date(timestamp)).getTime() > 0) {
        return isNaN(timestamp) ?
            response.json({"unix": moment(timestamp).unix(), "natural": timestamp})
            :
            response.json({"unix": timestamp, "natural": moment.unix(timestamp).format('MMMM D, YYYY')});
    }
    else {
        return response.json({"unix": null, "natural": null});
    }
}


router.get('/api/timestamp/:query', returntimestamp);


module.exports = router;