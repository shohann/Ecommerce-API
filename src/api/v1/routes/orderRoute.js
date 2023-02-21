const router = require('express').Router();

const { setOrderWithPayment, setOrder } = require('../controllers/orderController');

const { authorizeAccess } = require('../middlewares/handleCurrentUser');
const { handlePayment } = require('../middlewares/handlePayment')

router.route('/')
      .post(authorizeAccess, setOrder);
      // .post(authorizeAccess, setOrderWithPayment)

module.exports = router;