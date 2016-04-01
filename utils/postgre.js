'use strict';

const  pgp = require('pg-promise')({});
const config = require('../config');
const  pgUrl =  config.pg.postgreURL;
const db = new pgp(pgUrl);

pgp.pg.defaults.ssl=true;


const queryPostgre = function (text) {
    return db.query(text).then(function (data) {
        pgp.end();
        return data;
    }).catch(function (err) {
        return err;
    });
};



/*queryPostgre(`insert into shorturl.url VALUES(${num},'${tt}')`).then(function(data){
    console.log(data);
});

queryPostgre('select * from shorturl.url').then(function(data){
    console.log(data);
});
/*
/*


 pg.connect(pgUrl, function(err, client) {
 if (err) throw err;
 console.log('Connected to postgres! Getting schemas...');

 client
 .query('SELECT table_schema,table_name FROM information_schema.tables;',function(err,data){
 //console.log(cb);
 client.end();
 })

 });*/
/*
 function isConnected(pgURL) {

 pg.connect(pgUrl, function (err, client) {
 if (err) throw err;
 client.end();
 });
 }*/

//isConnected(pgUrl);


/*function insertQuery(site,shorturl,pgUrl){
 return new Promise(function(resolve,reject){
 pg.connect(pgUrl,function(err,client){
 if(err) reject(err);
 client
 .insertData('SELECT table_schema,table_name FROM information_schema.tables;')
 .on('done',)
 pg.disconnect();

 })
 })
 }*/


//function getSite(sohrturl,shorturl,pgUrl){}



module.exports = {
    queryPostgre: queryPostgre
};