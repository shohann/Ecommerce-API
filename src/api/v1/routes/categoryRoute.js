const router = require('express').Router();
const { setCategory } = require('../controllers/categoryController');
const { validateCategory } = require('../middlewares/validate');

router.route('/')
      .post(validateCategory, setCategory)
//    .put()
//    .delete()

// router.get('/:categoryId', )

module.exports = router