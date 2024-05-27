const express = require('express');
const router = express.Router();
const Salon = require('../db/models/Salons');
require('dotenv').config();
const mongoose = require('mongoose');

router.get('/search', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    try {
        const location = req.query.location;
        const salons = await Salon.find({ 
            city: location 
        }).sort({ rating: -1 }).limit(3);
        res.json({ 
            salons: salons
        });
    } catch (error) {
        console.error('Error searching for salons:', error);
        res.status(500).json({ 
            error: 'Internal Server Error' 
        });
    }
});

router.get('/all-salons', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    try {
        const location = req.query.location;
        const salons = await Salon.find({ city: location });
        res.json({ 
            salons: salons
        });
    } catch (error) {
        console.error('Error fetching all salons:', error);
        res.status(500).json({ 
            error: 'Internal Server Error' 
        });
    }
});

router.get('/salon/:id', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    try {
        const salonId = req.params.id;
        const salon = await Salon.findById(salonId);
        if (!salon) {
            return res.status(404).json({ error: 'Salon not found' });
        }
        res.json(salon);
    } catch (error) {
        console.error('Error fetching salon details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/add', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const { city, name, image, address, rating, photos } = req.body;

    try {
        const newSalon = Salon.create({
            city,
            name,
            image,
            address,
            rating,
            photos
        });

        res.status(201).json({
            newSalon: newSalon
        });
    } catch (error) {
        console.error('Error adding salon details:', error);
        res.status(500).json({ 
            message: 'Internal server error' 
        });
    }
});


module.exports = router;
