const { OrderDetail } = require('../models/DBInit');

module.exports.createOrderDetails = async (orderId, userId, cartItem) => {
    const items = cartItem.map((item) => {
        return {
            ...item,
            orderId: orderId,
            userId: userId
        }
    });

    return await OrderDetail.createMany({
        data: items
    });
}