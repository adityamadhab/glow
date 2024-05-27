const express = require('express');
const router = express.Router();
const Blog = require('../db/models/Blogs');
require('dotenv').config();
const mongoose = require('mongoose');

router.get('/all', async (req,res)=> {
    await mongoose.connect(process.env.MONGO_URL);
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/add', async (req,res)=> {
    await mongoose.connect(process.env.MONGO_URL);
    const { title, description, image, content } = req.body;
    
    try {
        const newBlog = await Blog.create({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            content: req.body.content
        });

        res.json({
            blog: newBlog
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;