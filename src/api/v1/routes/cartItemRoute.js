const router = require('express').Router();

const { setCartItemToCart,
        removeCartItemFromCart
      } = require('../controllers/cartItemController');

const { authorizeAccess } = require('../middlewares/handleCurrentUser');

const { checkCartItemAvailablity, 
        checkProductAvailablity 
      } = require('../middlewares/handleCartItem');

router.route('/:productId')
      .post(authorizeAccess, 
            checkProductAvailablity, 
            checkCartItemAvailablity, 
            setCartItemToCart
           )
      .delete(authorizeAccess,
              checkProductAvailablity,
              checkCartItemAvailablity,
              removeCartItemFromCart
             )


module.exports = router;