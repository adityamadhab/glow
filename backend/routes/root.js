const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const productRouter = require('./product');
const salonRouter = require('./salon');

router.use('/user', userRouter);
router.use('/products', productRouter);
router.use('/salons', salonRouter);

module.exports = router;