const express = require('express');
const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getIndex);

router.get('/product-list', productsController.getProducts);

router.get('/cart', productsController.getCart);

module.exports = router;
