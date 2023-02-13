const { TrackOrder } = require('../models/DBInit');

module.exports.createTrackOrder = async (orderId, address) => {
    return await TrackOrder.create({
        data: {
            orderId: orderId,
            address: address
        }
    });
}