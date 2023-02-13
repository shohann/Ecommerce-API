// Stock and alreaady availabe
// fetch price

const {  fetchCartItem, updateCartItemQuantity } = require('../services/cartItemService')
// product not found error
// stock unavailablity

module.exports.checkCartItemAvailablity = async (req, res, next) => {
    try {
        // this product can also have by other users cart,,should not use productId
        // but we need product price
        const userId = req.user.id;
        const productId = req.body.productId;
        const price = req.body.price;

        const cartItem = await fetchCartItem(productId);

        if (cartItem) {
            const cartItemId = cartItem.id;
            const quantity = cartItem.quantity + 1;
            const subTotal = quantity * price;

            const newItem = await updateCartItemQuantity(cartItemId, quantity, subTotal);

            console.log(newItem);
            return res.status(201).json({
                success: true,
                message: 'Item added'
            });
        }
        next();
    } catch (error) {
        next(error)
    }
}

module.exports.checkStockAvailablity = async (req, res, next) => {
    try {
        const { productId } = req.body;
        // get price
        
    } catch (error) {
        next(error);
    }
}