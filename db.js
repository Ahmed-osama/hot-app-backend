
const jsf = require('json-schema-faker');
const hotelsSchem = require('./schema/hotel');
jsf.extend('faker', () => require('faker'));
module.exports = () => {
    let hotels = jsf.generate(hotelsSchem);
    // hotels.forEach(element => {
    //     element.num = 1
    // });
    return { hotels }
} 