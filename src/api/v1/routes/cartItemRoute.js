const router = require('express').Router();
const { setCartItemToCart,
        removeCartItem } = require('../controllers/cartItemController');
const { authorizeAccess } = require('../middlewares/handleCurrentUser');

const { checkCartItemAvailablity } = require('../middlewares/handleCartItem')
router.route('/')
      .post(authorizeAccess, checkCartItemAvailablity, setCartItemToCart)
router.route('/:cartItemId')
      .delete(authorizeAccess, removeCartItem)


module.exports = router;