const { CartItem } = require('../models/DBInit');

module.exports.createCartItem = async (cartId, productId, price) => {
    return await CartItem.create({
        data: {
            subTotal: price,
            cartId: cartId,
            productId: productId,
        }
    });
}