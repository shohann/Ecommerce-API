const router = require('express').Router();
const { signUp, 
        verifyEmail, 
        resendVerificationEmail, 
        logIn,
        refresh,
        logOut,
        forgetPassword,
        changePassword,
        resetPassword
       } = require('../controllers/userController');

const { authorizeRefresh } = require('../middlewares/handleCurrentUser')

const { validateUserSignUp, validateUserLogIn } = require('../middlewares/validate');

// validate user signup
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
router.get('/refresh', authorizeRefresh, refresh); 
router.delete('/logout', authorizeRefresh, logOut);

router.post('/forget', forgetPassword); // validation
router.post('/change', changePassword); // validation
router.put('/reset/:userId/:token', resetPassword);

module.exports = router;

// router.route bad dite hobe
// validation, forget, reset, change