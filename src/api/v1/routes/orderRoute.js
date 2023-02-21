const router = require('express').Router();
const { setOrder } = require('../controllers/orderController');
const { authorizeAccess } = require('../middlewares/handleCurrentUser');

router.route('/')
      .post(authorizeAccess, setOrder);

module.exports = router;

// get order