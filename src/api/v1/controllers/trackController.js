const { fetchTrackByOrderId } = require('../services/trackOrderService');
const { NotFound } = require('../utils/appErrors');

module.exports.getTrack = async (req, res, next) => {
    try {
        const orderId = req.params.orderId;
        const track = await fetchTrackByOrderId(orderId);
        if (!track) throw new NotFound('Track not found for this order')
        
        res.status(200).json({
            success: true,
            message: track
        })
    } catch (error) {
        next(error)
    }
};

module.exports.modifyTrack = async (req, res, next) => {
    try {
        const orderId = req.params.orderId;

        res.status(200).json({
            success: true,
            message: 'Track update'
        });
    } catch (error) {
        next(error)
    }
};