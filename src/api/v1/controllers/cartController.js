const { createCartItemToCart,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        deleteCartItem,
        deleteCart,
        fetchCartAndItems
      } = require('../services/cartService');
const { NotFound } = require('../utils/appErrors');

module.exports.getCart = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const cart = await fetchCartAndItems(userId)

        res.status(200).json({
            success: true,
            message: cart
        });
    } catch (error) {
        next(error);
    }
};

module.exports.setCartItemInc = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { price } = req.product;
        const productId = req.params.productId;
        const currentCart = req.cart;
        const availablity = req.availablity;

        if (!availablity) {            
            await createCartItemToCart(userId, productId, price, currentCart);
            return res.status(201).json({
                success: true,
                message: 'New Item added to cart'
            }); 
        }

        const itemIndex = req.productIndex;
        await incrementCartItemQuantity(userId, currentCart, itemIndex);

        res.status(201).json({
            success: true,
            message: 'Item added to cart'
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports.removeCartItemDec = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const currentCart = req.cart; 
        const availablity = req.availablity;

        if (!availablity) {
            throw new NotFound('Item not exist in the cart');
        }

        const itemIndex = req.productIndex;
        await decrementCartItemQuantity(userId, currentCart, itemIndex)

        res.status(200).json({
            success: true,
            message: 'Item decremented'
        })
    } catch (error) {
        next(error);
    }
};

module.exports.removeCartItem = async (req, res, next) => {
    try {
        const userId = req.user.id
        const cart = req.cart;
        const availablity =  req.availablity;

        if (!availablity) {
            throw new NotFound('Item not found');
        }

        const productIndex = req.productIndex
        await deleteCartItem(userId, cart, productIndex);
 
        res.status(200).json({
            success: true,
            message: 'Cart Item deleted'
        })
    } catch (error) {
        next(error);
    }
};

module.exports.removeCart = async (req, res, next) => {
    try {
        const userId = req.user.id;
        await deleteCart(userId)
        res.status(200).json({
            success: true,
            message: 'Cart Deleted'
        })
    } catch (error) {
        next(error);
    }
};


