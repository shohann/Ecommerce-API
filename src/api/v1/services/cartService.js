const { Cart } = require('../models/DBInit');

module.exports.createCart = async (userId) => {
    return Cart.create({
        data: {
            userId: userId
        }
    });
};

module.exports.fetchCart = async (userId) => {
    return await Cart.findUnique({
        where: {
            userId: userId
        }
    });
};

module.exports.fetchCartIdById = async (userId) => {
    return await Cart.findUnique({
        where: {
            userId: userId
        },
        select: {
            id: true
        }
    });
};