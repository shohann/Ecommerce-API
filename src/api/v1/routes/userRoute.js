const router = require('express').Router();
const { signUp } = require('../controllers/userController');

// authorize, validation
router.route('/signup')
      .post(signUp);

module.exports = router;