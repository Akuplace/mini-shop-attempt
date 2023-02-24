const Product = require('../models/product');

exports.getAddProductAdmin = (req, res) => {
    res.render('./admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true,
    });
};

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render('./shop/product-list', {
            prods: products,
            pageTitle: 'Shop',
            path: '/product-list',
            hasProducts: products.length > 0,
            activeShop: true,
            productsCSS: true,
        });
    });
};

exports.getProductsAdmin = (req, res) => {
    Product.fetchAll((products) => {
        res.render('./admin/products', {
            prods: products,
            pageTitle: 'Shop - Admin',
            path: '/admin/products',
            hasProducts: products.length > 0,
            activeShop: true,
            productsCSS: true,
        });
    });
};

exports.getIndex = (req, res) => {
    res.render('./shop/index', {
        pageTitle: 'Shop',
        path: '/',
    });
};

exports.getCart = (req, res) => {
    res.render('./shop/cart', {
        pageTitle: 'Cart',
        path: '/',
    });
};
