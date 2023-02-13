const {  fetchCartItem, 
         updateCartItemQuantity } = require('../services/cartItemService');
const { fetchCartIdById } = require('../services/cartService');

const { fetchProductForCart } = require('../services/productService');

const { updateCartTotal } = require('../services/cartService');

const { BadRequest, NotFound } = require('../utils/appErrors');

module.exports.checkCartItemAvailablity = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { productId } = req.params;

        const cart = await fetchCartIdById(userId); 
        const cartItem = await fetchCartItem(cart.id, productId);

        if (cartItem) {
            const cartItemId = cartItem.id;
            
            await updateCartItemQuantity(cartItemId, cartItem.product.price);
            await updateCartTotal(cart.id, cartItem.product.price)
            
            return res.status(201).json({
                success: true,
                message: 'Item added'
            });
        }

        req.cartId = cart.id;
        next();
    } catch (error) {
        next(error)
    }
};

// jdi confirm hoar age e keu nia fele then?
// amr idea holo ekjon user cart a nile e stock decrement korbe, r order na kore remove kore abr increment korbe

module.exports.checkProductAvailablity = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const product = await fetchProductForCart(productId);
        
        if (!product) {
            throw new NotFound('Product not available')
        } 

        if(product.stock === 0) {
            throw BadRequest('Out of stock')
        } 

        req.product = product;

        next();
    } catch (error) {
        next(error);
    }
};