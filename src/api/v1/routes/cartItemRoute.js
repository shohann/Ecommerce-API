const router = require('express').Router();
const { setCartItem, modifyCartItem } = require('../controllers/cartItemController');

const { authorizeAccess } = require('../middlewares/handleCurrentUser')

router.route('/')
      .post(authorizeAccess, setCartItem)
      .put(authorizeAccess, modifyCartItem)


module.exports = router;