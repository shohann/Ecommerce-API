const { createCartItem,
        deleteCartItem } = require('../services/cartItemService');
const { fetchCartIdById } = require('../services/cartService');

// stock issuse
// if a user post 2 times -> duplicate
module.exports.setCartItemToCart = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const productId = req.body.productId;
        const price = req.body.price;
        const quantity = req.body.quantity;
        const subTotal = quantity * price;


        const cart = await fetchCartIdById(userId);
        await createCartItem(cart.id, productId, quantity, subTotal);
        
        res.status(201).json({
            success: true,
            message: 'Item added'
        });
    } catch (error) {
        next(error)
    }
};


// not found error
module.exports.removeCartItem = async (req, res, next) => {
    try {
        const cartItemId = req.params.cartItemId;
        
        await deleteCartItem(cartItemId);

        res.status(200).json({
            success: true,
            message: 'Successfully Deleted'
        });

    } catch (error) {
        next(error);
    }
};