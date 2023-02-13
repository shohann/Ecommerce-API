const { Order } = require('../models/DBInit');


module.exports.createOrder = async  (userId, address, total) => {
    return await Order.create({
        data: {
            userId: userId,
            address: address,
            total: total
        }
    })
}