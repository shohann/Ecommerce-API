const { TrackOrder } = require('../models/DBInit');

// get track order
module.exports.fetchTrackByOrderId = async (orderId) => {
    return await TrackOrder.findUnique({
        where: {
            orderId: orderId
        }
    });
};

// update