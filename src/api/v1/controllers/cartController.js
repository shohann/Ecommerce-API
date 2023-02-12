const { fetchCart } = require('../services/cartService')

module.exports.getCart = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const cart = await fetchCart(userId);

        res.status(200).json({
            success: true,
            message: cart
        });
    } catch (error) {
        next(error)
    }
};