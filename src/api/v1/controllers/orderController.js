const { fetchCartWithItems } = require('../services/cartService');
const { fetchProfileAddress } = require('../services/profileService');

const { createOrder } = require('../services/orderService');
const { createOrderDetails } = require('../services/orderDetailService');
const { createTrackOrder } = require('../services/trackOrderService');

module.exports.setOrderWithPayment = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { total, CartItem } = await fetchCartWithItems(userId);
        const { address } = await fetchProfileAddress(userId);

        const newOrder = await createOrder(userId, address, total);

        const orderDetails = await createOrderDetails(newOrder.id, userId, CartItem);

        const trackOrder = await createTrackOrder(newOrder.id, address);

        // Cart items deletion, cart total deletion
        res.status(201).json({
            success: true,
            message: 'Order has been placed successfully'
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
}