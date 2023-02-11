const router = require('express').Router();
const { signUp, verifyEmail, resendVerificationEmail, logIn } = require('../controllers/userController');

// authorize, validation
// router.get('signup', signUp)
router.route('/signup')
      .post(signUp);

router.route('/verify/:token')
      .get()

router.route('/resend')
      .get()

router.post('/login', logIn);

module.exports = router;

