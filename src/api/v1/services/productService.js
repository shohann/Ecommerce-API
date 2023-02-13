const { Product } = require('../models/DBInit');

module.exports.createProduct = async (product) => {
    return await Product.create({
        data: product
    })
}

module.exports.fetchProductForCart= async (productId) => {
    return await Product.findUnique({
        where: {
            id: productId
        },
        select: {
            name: true,
            price: true,
            stock: true
        }
    });
};
