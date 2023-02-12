const router = require('express').Router();
const { setCategory } = require('../controllers/categoryController');

router.route('/')
      .post(setCategory)
//    .put()
//    .delete()

// router.get('/:categoryId', )

module.exports = router