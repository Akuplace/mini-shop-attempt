const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');

const pathDir = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (callback) => {
    fs.readFile(pathDir, (err, data) => {
        if (err) {
            console.error(err);
            return callback([]);
        } else {
            return callback(JSON.parse(data));
        }
    });
};

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(pathDir, JSON.stringify(products), (err) => {
                console.error(err);
            });
        });
    }

    static fetchAll(render) {
        getProductsFromFile(render);
    }
};
