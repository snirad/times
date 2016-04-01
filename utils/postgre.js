'use strict';

const  pgp = require('pg-promise')({});
const config = require('../config');
const  pgUrl =  config.pg.postgreURL;
const db = pgp(pgUrl);
pgp.pg.defaults.ssl=true;

/**
 * 
 * @param queryString: can be any sort of string, query,insert, create,delete.
 * @returns {Promise.<result>}
 */
const queryPostgre = function (queryString) {
    return db.query(queryString).then((data)=> {
        pgp.end();
        return data;
    }).catch((err => err));
};



module.exports = {
    queryPostgre: queryPostgre
};