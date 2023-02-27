const { TrackOrder } = require('../models/DBInit');

// get track order
module.exports.fetchTrackByOrderId = async (orderId) => {
    return await TrackOrder.findUnique({
        where: {
            orderId: orderId
        }
    });
};

module.exports.updateTrackStatusByOrderId = async (orderId, status) => {
    return await TrackOrder.update({
        where: {
            orderId: orderId
        },
        data: {
            status: status
        }
    });
};