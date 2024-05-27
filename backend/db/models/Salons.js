const mongoose = require('mongoose');

const salonSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    }, 
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    photos: {
        type: [String],
        required: true
    }
});

const Salon = mongoose.model('Salon', salonSchema);

module.exports = Salon;