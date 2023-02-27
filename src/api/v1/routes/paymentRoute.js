const router = require('express').Router();
const { setPayment, getPayment } = require('../controllers/paymentController');
const { authorizeAccess } = require('../middlewares/handleCurrentUser');
const { checkOrder } = require('../middlewares/checkOrder');

router.route('/:orderId')
      .post(authorizeAccess, checkOrder, setPayment)
      .get(authorizeAccess, getPayment) // protected user, admin

module.exports = router;