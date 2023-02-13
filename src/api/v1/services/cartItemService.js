const { CartItem } = require('../models/DBInit');

module.exports.createCartItem = async (cartId, productId, subTotal) => {
    return await CartItem.create({
        data: {
            subTotal: subTotal,
            cartId: cartId,
            productId: productId,
        }
    });
};

module.exports.fetchCartItem = async (cartId, productId) => {
    return await CartItem.findUnique({
        where: {
            cartId_productId: {
                cartId: cartId,
                productId: productId
            }
        },
        include: {
            product: {
                select: {
                    price: true,
                }
            }
        }
    })
};

module.exports.updateCartItemQuantity = async (cartItemId, price) => {
    return await CartItem.update({
        where: {
            id: cartItemId
        },
        data: {
            quantity: {
                increment: 1
            },
            subTotal: {
                increment: price
            }
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