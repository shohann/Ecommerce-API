const router = require('express').Router();
const { setPayment } = require('../controllers/paymentController');
const { authorizeAccess } = require('../middlewares/handleCurrentUser');
const { checkOrder } = require('../middlewares/checkOrder');

router.route('/:orderId')
      .post(authorizeAccess, checkOrder, setPayment)

module.exports = router;