const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);
