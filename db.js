
const jsf = require('json-schema-faker');
const hotelsSchem = require('./schema/hotel');
const roomSchem = require('./schema/room');
jsf.extend('faker', () => require('faker'));
module.exports = () => {
    let hotels = jsf.generate(hotelsSchem);
    let rooms = []
    let confirmations = []
    hotels.forEach(hotel => {
        let hotelRooms = jsf.generate(roomSchem(hotel.id))
        rooms.push(...hotelRooms)
    });
    return { hotels, rooms, confirmations }
} 