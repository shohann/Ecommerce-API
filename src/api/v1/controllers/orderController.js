const { fetchCartAndItems,
        deleteCart
      } = require('../services/cartService');
const { fetchProfileAddress } = require('../services/profileService');
const { createOrder, 
        fetchOrdersByUserId,
        fetchOrderById,
        deleteOrderById
      } = require('../services/orderService');
const { BadRequest, NotFound } = require('../utils/appErrors');

// 1 stock hole ki hoy -> stock finished
module.exports.setOrder = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const cart = await fetchCartAndItems(userId);
        if (!cart || cart.total === 0 || cart.items.length === 0) throw new BadRequest('Cart does not exists'); 

        const { address } = await fetchProfileAddress(userId);
        if (!address) throw new BadRequest('Profile does not exists');
        const order = await createOrder(userId, address, cart.total, cart.items);
        await deleteCart(userId);

        res.status(201).json({
            success: true,
            message: `Order has been placed successfully`
        })
    } catch (error) {
        next(error);
    }
};

module.exports.getOrders = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const orders = await fetchOrdersByUserId(userId);
        
        res.status(200)
           .json({
              success: true,
              message: orders
        });
    } catch (error) {
        next(error);
    }
};

module.exports.getOrder = async (req, res, next) => {
    try {
        const orderId = req.params.orderId;
        const order = await fetchOrderById(orderId)

        res.status(200)
           .json({
              success: true,
              message: order
        });
    } catch (error) {
        next(error)
    }
};

module.exports.removeOrder = async (req, res, next) => {
    try {
        const orderId = req.params.orderId;
        const order = await fetchOrderById(orderId);
        if (!order) throw new NotFound('Order not found');
        if (order.paymentDetail) throw new BadRequest('Deletion can not be done for paid order');

        const deletedOrder = await deleteOrderById(orderId);

        res.status(200)
        .json({
           success: true,
           message: 'Order deleted'
        });
    } catch (error) {
        console.log(error);
        next(error)
    }
}