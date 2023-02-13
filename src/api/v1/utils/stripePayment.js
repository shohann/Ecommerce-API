const Stripe = require('stripe');
const stripeKey = require('./appConfigs').getStripeKey();
const stripe = Stripe(stripeKey);

module.exports.makePayment = async (amount, number, exp_month, exp_year, cvc, currency ) => {
    const { id } = await stripe.paymentMethods.create({
        type: 'card',
        card: {
          number: number,
          exp_month: exp_month,
          exp_year: exp_year,
          cvc: cvc,
        },
    });

    const paymentIntent = await stripe.paymentIntents.create({
        payment_method: id,
        amount: amount,
        currency: currency,
        confirm: true,
        payment_method_types: ['card'],
    });

    return paymentIntent;
};









