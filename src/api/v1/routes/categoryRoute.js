const router = require('express').Router();
const { setCategory, 
        getCategories 
      } = require('../controllers/categoryController');
const { authorizeAccess, authorizeAdmin } = require('../middlewares/handleCurrentUser')
const { validateCategory } = require('../middlewares/validate');

router.route('/')
      .post(authorizeAccess, authorizeAdmin, validateCategory, setCategory)
      .get(getCategories) 

module.exports = router