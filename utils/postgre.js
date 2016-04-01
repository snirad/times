'use strict';

const  pgp = require('pg-promise')({});
const config = require('../config');
const  pgUrl =  config.pg.postgreURL;
const db = pgp(pgUrl);
pgp.pg.defaults.ssl=true;

const queryPostgre = function (queryString) {
    return db.query(queryString).then((data)=> {
        pgp.end();
        return data;
    }).catch((err => err));
};




module.exports = {
    queryPostgre: queryPostgre
};