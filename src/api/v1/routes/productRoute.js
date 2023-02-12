const router = require('express').Router();
const { setProduct } = require('../controllers/productController');

router.route('/')
      .post(setProduct)

module.exports = router