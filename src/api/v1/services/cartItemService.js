const { CartItem } = require('../models/DBInit');

module.exports.createCartItem = async (cartId, productId, quantity, subTotal) => {
    return await CartItem.create({
        data: {
            quantity: quantity,
            subTotal: subTotal,
            cartId: cartId,
            productId: productId,
        }
    });
};

module.exports.fetchCartItem = async (productId) => {
    return await CartItem.findFirst({
        where: {
            productId: productId
        }
    })
};

module.exports.updateCartItemQuantity = async (cartItemId, quantity, subTotal) => {
    return await CartItem.update({
        where: {
            id: cartItemId
        },
        data: {
            quantity: quantity,
            subTotal: subTotal
        }
    });
};

module.exports.deleteCartItem = async (cartItemId) => {
    return CartItem.delete({
        where: {
            id: cartItemId
        }
    });
};