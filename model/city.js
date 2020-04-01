var mongoose = require('mongoose');
const CitySchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String
    },
    ascii: {
        type: String
    },
    alt_name: {
        type: String
    },
    lat: {
        type: Number
    },
    long: {
        type: Number
    },
    feat_class: {
        type: String
    },
    country: {
        type: String
    },
    cc2: {
        type: String
    },
    admin1: {
        type: Number
    },
    admin2: {
        type: Number
    },
    admin3: {
        type: Number
    },
    admin4: {
        type: Number
    },
    population: {
        type: Number
    },
    elevation: {
        type: Number
    },
    dem: {
        type: Number
    },
    tz: {
        type: String
    },
    modified_at: {
        type: Date
    }
}, {
    timestamps: {
        updatedAt: 'modified_at'
    }
});
const City = mongoose.model('City', CitySchema);
module.exports = City;