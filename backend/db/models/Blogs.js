const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }, 
    content: {
        type: String,
        required: true,
        maxLength: 1000
    }
});

module.exports = mongoose.model('Blogs', blogsSchema);