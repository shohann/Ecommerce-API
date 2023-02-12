const router = require('express').Router();
const { signUp, verifyEmail, 
        resendVerificationEmail, logIn } = require('../controllers/userController');

const { validateUserSignUp, validateUserLogIn } = require('../middlewares/validate');

// authorize, validation
// router.get('signup', signUp)
// upload er por validation 
// signup or login er age validation

router.route('/signup')
      .post(signUp);

router.route('/verify/:token')
      .get(verifyEmail)

router.route('/resend')
      .post(resendVerificationEmail)

router.post('/login', validateUserLogIn, logIn);

module.exports = router;

