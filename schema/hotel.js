const { hotelNames } = require('../helpers')
const hotelNamesPattern = hotelNames.join("|")
module.exports = {
    type: "array",
    minItems: 6,
    maxItems: 18,
    uniqueItems: true,
    items: {
        type: 'object',
        properties: {
            id: {
                type: "string",
                faker: 'random.uuid'
            },
            name: {

                type: "string",
                pattern: hotelNamesPattern,
                minItems: 1,
                maxItems: 1,
                uniqueItems: true
            },
            description: {
                type: 'string',
                faker: 'lorem.paragraphs'
            },
            distance_to_venue: {
                type: 'number',
                minimum: 10,
                maximum: 2000
            },
            rating: {
                type: 'number',
                minimum: 0,
                maximum: 5,
                multipleOf: 0.10
            },
            price_category: {
                type: 'string',
                pattern: 'low|medium|high',
                minItems: 1,
                maxItems: 1,
            },
            amenities: {
                type: 'array',
                items: {
                    pattern: 'free_parking|free_wifi|pets|restaurant|gym|pool|spa'
                },
                minItems: 2,
                maxItems: 7,
                uniqueItems: true
            },
            images: {
                type: 'array',
                items: {
                    type: 'integer',
                    minimum: 1,
                    maximum: 10
                },
                minItems: 0,
                maxItems: 10,
                uniqueItems: true
            }
        },
        required: [
            'id',
            'name',
            'description',
            'distance_to_venue',
            'rating',
            'price_category',
            'amenities',
            'images'
        ]
    }
}
