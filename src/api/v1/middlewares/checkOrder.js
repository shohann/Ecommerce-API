const { fetchOrderForPayment } = require('../services/orderService');
const { NotFound, BadRequest } = require('../utils/appErrors');

module.exports.checkOrder = async (req, res, next) => {
    try {
        const orderId = req.params.orderId;
        const order = await fetchOrderForPayment(orderId);

        if (!order) throw new NotFound('Order does not exist');
        if (!order.paymentDetail) throw new BadRequest('Already paid for this order');

        req.order = order;
        next()
    } catch (error) {
        console.log(error);
        next(error)
    }
};