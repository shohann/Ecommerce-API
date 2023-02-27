const { PaymentDetail } = require('../models/DBInit')

module.exports.fetchPaymentByOrderId = async (orderId) => {
    return await PaymentDetail.findUnique({
        where: {
            orderId: orderId
        }
    });
};



