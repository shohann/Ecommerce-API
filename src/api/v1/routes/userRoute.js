const router = require('express').Router();
const { signUp, verifyEmail, resendVerificationEmail } = require('../controllers/userController');

// authorize, validation
// router.get('signup', signUp)
router.route('/signup')
      .post(signUp);

router.route('/verify/:token')
      .get()

router.route('/resend')
      .get()

module.exports = router;

