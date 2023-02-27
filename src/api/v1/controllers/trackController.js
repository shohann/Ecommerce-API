const { fetchTrackByOrderId,
        updateTrackStatusByOrderId
      } = require('../services/trackOrderService');
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
        const status = req.body.status;
        const updatedTrack = await updateTrackStatusByOrderId(orderId, status);

        res.status(200).json({
            success: true,
            message: updatedTrack
        });
    } catch (error) {
        next(error)
    }
};