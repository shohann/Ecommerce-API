const { makePayment } = require('../utils/stripePayment');
const { ApplicationError } = require('../utils/appErrors');

// price must generate by server -> only product id will be given

module.exports.handlePayment = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const {  amount, number, exp_month, exp_year, cvc, currency } = req.body;

        const paymentIntent = await makePayment(amount, number, exp_month, exp_year, cvc, currency);

        if (paymentIntent.status !== 'succeeded') throw new ApplicationError('Payment Failed');
        
        next();
    } catch (error) {
        console.log(error);
        next(error)
    }
}


// amount, number, exp_month, exp_year, cvc, currency 

// {
//     "userId": "dsggsgdgsgds8382y8",
//     "amount": 5000,
//     "number": "4242424242424242",
//     "exp_month": 8,
//     "exp_year": 2023,
//     "cvc": "314",
//     "currency": "usd"
// }