const express = require('express');
const router = express.Router();
const zod = require('zod');
const User = require('../db/models/Users');
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET; 

const registerValidation = zod.object({
    name : zod.string(),
    email : zod.string().email(),
    password : zod.string().min(6)
});

const loginValidation = zod.object({
    email : zod.string().email(),
    password : zod.string().min(6)
});

router.post('/register', async (req,res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const { success }  = registerValidation.safeParse(req.body);

    if(!success) {
        return res.json({
            mag : "Invalid Credentials"
        });
    }

    const existingUser = await User.findOne({
        email : req.body.email
    });

    if(existingUser) {
        return res.json({
            msg: "User already exists with that email"
        });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const user = await User.create({
        name : req.body.name,
        email : req.body.email,
        password : hashedPassword
    });

    res.json({
        user
    });
});

router.post('/login', async (req,res)=> {
    await mongoose.connect(process.env.MONGO_URL);
    const { success } = loginValidation.safeParse(req.body);

    if(!success) {
        return res.json({
            msg : "Invalid Credentials"
        });
    }

    const user = await User.findOne({
        email : req.body.email
    });

    if(!user) {
        return res.json({
            msg : "Incorrect Credentails"
        });
    }

    const matchPassword = await bcrypt.compare(req.body.password, user.password);

    if(!matchPassword) {
        return res.json({
            msg : "Incorrect Credentails"
        });
    }

    const token = jwt.sign({
        user : user._id
    }, JWT_SECRET);

    res.json({
        token : token,
        user : user
    });

});

module.exports = router;