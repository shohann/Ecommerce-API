const router = require('express').Router();
const { setCategory } = require('../controllers/categoryController');
const { validateCategory } = require('../middlewares/validate');

router.route('/')
      .post(validateCategory, setCategory)
      // .get() // all categories will show up
//    .put()
//    .delete()

module.exports = router