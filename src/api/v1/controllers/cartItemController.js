const { createCartItem } = require('../services/cartItemService');
const { fetchCartIdById } = require('../services/cartService');

module.exports.setCartItem = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const productId = req.body.productId;
        const price = req.body.price;

        const cart = await fetchCartIdById(userId);
        await createCartItem(cart.id, productId, price);
        
        res.status(201).json({
            success: true,
            message: 'Item added'
        })
    } catch (error) {
        next(error)
    }
}

module.exports.modifyCartItem = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
}