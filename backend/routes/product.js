const express = require('express');
const router = express.Router();
const Product = require('../db/models/Product');
require('dotenv').config();
const mongoose = require('mongoose');

router.post('/add', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const { name, imageSrc, description, price, rating } = req.body;
    
    try {
        const newProduct = new Product({
            name,
            imageSrc,
            description,
            price,
            rating
        });

        const savedProduct = await newProduct.save();

        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/all', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', getProduct, (req, res) => {
    res.json(res.product);
});

async function getProduct(req, res, next) {
    await mongoose.connect(process.env.MONGO_URL);
    let product;
    try {
        product = await Product.findById(req.params.id);
        if (product == null) {
            return res.status(404).json({ message: "Product not found" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.product = product;
    next();
}

module.exports = router;
