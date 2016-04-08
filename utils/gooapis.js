'use strict';
const _ = require('lodash')
    , Promise = require('bluebird')
    , request = Promise.promisifyAll(require('request'),{multiArgs: true})
    , config = require('../config');

/**
 * 
 * @param offset: limit for pagination.
 * @param query: image search query.
 * @returns {*}: A promise, array composed of JSON objects.
 */
function getImages(offset, query) {
    return request.getAsync({
        url: config.googleAPI.url,
        qs: {
            key: config.googleAPI.key,
            cx: config.googleAPI.cx,
            searchType: 'image',
            num: offset,
            q: query
        }
    }).spread((response,body)=> {
        if (response.statusCode != 200)
            throw new Error(`Failed to get queries from Appcloud Infra API, status code: ${response.statusCode}`);
        let images = JSON.parse(body).items;
        let arr = [];
        _.forEach(images, (value)=> {
            arr.push({
                url: value.link,
                snippet: value.snippet,
                thumbnail: value.image.thumbnailLink,
                context: value.image.contextLink
            });
        });
        return arr;
    }).catch(console.error);
}
module.exports ={
    getImages : getImages
};
