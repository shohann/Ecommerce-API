const router = require('express').Router();
const { getCart, 
        setCartItemInc,
        removeCartItemDec,
        removeCartItem, 
        removeCart
      } = require('../controllers/cartController');
const { authorizeAccess } = require('../middlewares/handleCurrentUser');
const { checkProductAvailablity, 
        checkCurrentUserCart, 
        checkCartItemAvailablity 
      } = require('../middlewares/handleCart');

router.route('/')
      .get(authorizeAccess, getCart)
      .delete(authorizeAccess, removeCart);

router.post('/inc/:productId', 
            authorizeAccess, 
            checkProductAvailablity, 
            checkCurrentUserCart, 
            checkCartItemAvailablity, 
            setCartItemInc
           );

router.delete('/dec/:productId', 
              authorizeAccess, 
              checkCurrentUserCart, 
              checkCartItemAvailablity, 
              removeCartItemDec
             );

router.delete('/:productId',
              authorizeAccess,
              checkCurrentUserCart,
              checkCartItemAvailablity,
              removeCartItem
             );

module.exports = router;