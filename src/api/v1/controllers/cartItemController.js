const { createCartItem,
        deleteCartItem } = require('../services/cartItemService');
const { fetchCartIdById } = require('../services/cartService');

// working
const { updateCartTotal } = require('../services/cartService');

module.exports.setCartItemToCart = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { productId } = req.params;
        const subTotal = req.product.price;

        const cart = await fetchCartIdById(userId);
        await updateCartTotal(cart.id, subTotal)
        const newCartItem = await createCartItem(cart.id, productId, subTotal);

        console.log(newCartItem);
        
        res.status(201).json({
            success: true,
            message: 'Item added'
        });
    } catch (error) {
        console.log(error);
        next(error)
    }
};

module.exports.getCartItems = async (req, res, next) => {

}


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