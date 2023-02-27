const { fetchTrackByOrderId } = require('../services/trackOrderService');
const { getOrderTrackStatus } = require('../utils/appConfigs');
const { BadRequest, NotFound } = require('../utils/appErrors');
const { preparing, shipped, deliverd } = getOrderTrackStatus();

module.exports.checkTrackStatus = async (req, res, next) => {
    try {
        const orderId = req.params.orderId;
        const status = req.body.status;
        const track = await fetchTrackByOrderId(orderId);
        if (!track) throw new NotFound('Track not found');
        if (track.status === deliverd) throw new BadRequest('Order is already deliverd');
        if (status === preparing || status === shipped || status === deliverd) {
            next();
        } else {
            throw new BadRequest('Invalid Track Status');
        }
    } catch (error) {
        next(error);
    }
};
