"use strict";

function generateRandom(){
    return Math.floor((Math.random() * 1000));
}

module.exports = {
    generateRandom : generateRandom
};