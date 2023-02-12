const router = require('express').Router();
const { getCart } = require('../controllers/cartController');

const { authorizeAccess } = require('../middlewares/handleCurrentUser')

router.route('/')
      .get(authorizeAccess, getCart)


module.exports = router;