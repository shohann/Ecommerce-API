const { fetchProductForCart } = require('../services/productService');

const { findExistingProduct, createEmptyCart, fetchCartAndItems } = require('../services/cartService');

const { NotFound } = require('../utils/appErrors');

module.exports.checkCurrentUserCart = async (req, res, next) => {
    try {
        const userId = req.user.id;
        let cart = await fetchCartAndItems(userId);
        if (!cart) { // only for post req -> delete a cart na thaka handle kora
            cart = createEmptyCart();
        }
        
        req.cart = cart; 
        next(); 
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports.checkCartItemAvailablity = async (req, res, next) => {
    try {
        const cart = req.cart;
        const productId = req.params.productId;
        const productIndex = findExistingProduct(cart.items, productId);

        if (productIndex === -1) {
            req.availablity = false
        } else {
            req.availablity = true
            req.productIndex = productIndex
        }

        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports.checkProductAvailablity = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const product = await fetchProductForCart(productId); // Cacheable

        if (!product) {
            throw new NotFound('Product not available')
        } 

        req.product = product;        
        next();
    } catch (error) {
        next(error);
    }
};