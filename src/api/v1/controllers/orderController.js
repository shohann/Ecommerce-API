const { fetchCartAndItems } = require('../services/cartService');
const { fetchProfileAddress } = require('../services/profileService');
const { createOrder } = require('../services/orderService');
const { BadRequest } = require('../utils/appErrors');

module.exports.setOrder = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const cart = await fetchCartAndItems(userId);
        if (!cart || cart.total === 0 || cart.items.length === 0) throw new BadRequest('Cart does not exists'); 

        const { address } = await fetchProfileAddress(userId);
        if (!address) throw new BadRequest('Profile does not exists');
        const order = await createOrder(userId, address, cart.total, cart.items);

        res.status(201).json({
            success: true,
            message: `Order has been placed successfully`
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
};

