const express = require('express');
const productsController = require('../controllers/products');

const router = express.Router();

router.get('/add-product', productsController.getAddProductAdmin);
router.post('/add-product', productsController.postAddProduct);

router.get('/products', productsController.getProductsAdmin);

module.exports = router;
