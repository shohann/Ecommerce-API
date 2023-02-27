const router = require('express').Router();
const { setOrder,
        getOrder,
        getOrders,
        removeOrder
      } = require('../controllers/orderController');
const { authorizeAccess } = require('../middlewares/handleCurrentUser');

router.route('/')
      .get(authorizeAccess, getOrders)
      .post(authorizeAccess, setOrder);

router.route('/:orderId')
      .get(authorizeAccess, getOrder)
      .delete(authorizeAccess, removeOrder)
      
module.exports = router;
