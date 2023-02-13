const router = require('express').Router();

const { setCartItemToCart,
        removeCartItem } = require('../controllers/cartItemController');

const { authorizeAccess } = require('../middlewares/handleCurrentUser');

const { checkCartItemAvailablity, 
        checkProductAvailablity } = require('../middlewares/handleCartItem');

router.route('/:productId')
      .post(authorizeAccess, 
            checkProductAvailablity, 
            checkCartItemAvailablity, 
            setCartItemToCart)

router.route('/:cartItemId')
      .delete(authorizeAccess, removeCartItem)


module.exports = router;