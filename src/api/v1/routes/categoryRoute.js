const router = require('express').Router();
const { setCategory, 
        getCategories 
      } = require('../controllers/categoryController');
const { validateCategory } = require('../middlewares/validate');

router.route('/')
      .post(validateCategory, setCategory)
      .get(getCategories) 

module.exports = router