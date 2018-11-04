
const { roomTypes } = require('../helpers')
const roomTypesPattern = roomTypes.join(" Bed|")
module.exports = hotelId => {
    return {
        type: "array",
        minItems: 2,
        maxItems: 6,
        uniqueItems: true,
        items: {
            type: "object",
            properties: {
                hotelId: {
                    type: 'string',
                    pattern: `${hotelId}`,
                },
                id: {
                    type: "string",
                    faker: 'random.uuid'
                },
                name: {
                    type: "string",
                    pattern: roomTypesPattern,
                    minItems: 1,
                    maxItems: 1,

                },
                description: {
                    type: 'string',
                    faker: 'lorem.paragraphs'
                },
                max_occupancy: {
                    type: 'number',
                    minimum: 1,
                    maximum: 4,
                    multipleOf: 1
                },
                price_in_usd: {
                    type: 'number',
                    minimum: 100,
                    maximum: 1100,
                    multipleOf: 1
                },
                image: {
                    type: 'number',
                    minimum: 1,
                    maximum: 26,
                    multipleOf: 1
                }
            },
            required: ["hotelId", "id", "name", "description", "max_occupancy", "price_in_usd", "image"]
        },
    }
}
