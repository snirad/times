'use strict';
const _ = require('lodash');
const rp = require('request-promise');

/**
 * 
 * @param offset: limit for pagination.
 * @param query: image search query.
 * @returns {*}: A promise, array composed of JSON objects.
 */
function getImages(offset, query) {
    return rp({
        method: 'GET',
        url: 'https://www.googleapis.com/customsearch/v1',
        qs: {
            key: 'AIzaSyAXYWJXEJYRhqObTXJHvNEhelrhwOWvWUk',
            cx: '016520754752152577647:niuetlfl8ta',
            searchType: 'image',
            num: offset,
            q: query
        }
    }).then((response)=> {
        let images = JSON.parse(response).items;
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
    })
}

module.exports ={
    getImages : getImages
};
