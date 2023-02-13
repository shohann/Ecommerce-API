const router = require('express').Router();

const { setOrderWithPayment } = require('../controllers/orderController');

const { authorizeAccess } = require('../middlewares/handleCurrentUser');
const { handlePayment } = require('../middlewares/handlePayment')

router.route('/')
      .post(authorizeAccess, setOrderWithPayment)

module.exports = router;