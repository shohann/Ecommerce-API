const { Product } = require('../models/DBInit');

module.exports.createProduct = async (product) => {
    return await Product.create({
        data: product
    })
}