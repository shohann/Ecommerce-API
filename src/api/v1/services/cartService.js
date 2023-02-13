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

module.exports.fetchCartWithItems = async (userId) => {
    return await Cart.findUnique({
        where: {
            userId: userId
        },
        include: {
            CartItem: {
                select: {
                    quantity: true,
                    subTotal: true,
                    productId: true
                }
            }
        }
    })
}

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



module.exports.updateCartTotal = async (cartId, total) => {
    return await Cart.update({
        where: {
            id: cartId
        },
        data: {
            total: {
                increment: total,
            }
        }
    })
}