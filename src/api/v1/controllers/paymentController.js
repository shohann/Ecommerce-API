const { makePayment } = require('../utils/stripePayment');
const { updateOrderWithPaymentAndTrack} = require('../services/orderService');
const { ApplicationError, BadRequest } = require('../utils/appErrors');

module.exports.setPayment = async (req, res, next) => {
    try {
        const { 
            address, 
            total, 
            paymentDetail
        } = req.order;
        const {  
            number, 
            exp_month, 
            exp_year, 
            cvc, 
            currency 
        } = req.body;
        const userId = req.user.id; 
        const orderId = req.params.orderId;
        
        if (paymentDetail) throw new BadRequest('Payement already done for this order');
        const paymentIntent = await makePayment(total, number, exp_month, exp_year, cvc, currency);
        if (paymentIntent.status !== 'succeeded') throw new ApplicationError('Payment Failed');

        await updateOrderWithPaymentAndTrack(userId, orderId, paymentIntent.amount, currency, address);

        res.status(201)
           .json({
              success: true,
              message: 'Payment Successfull'
        });
    } catch (error) {
        next(error)
    }
};



// {
//     "number": "4242424242424242",
//     "exp_month": 8,
//     "exp_year": 2023,
//     "cvc": "314",
//     "currency": "usd"
// }