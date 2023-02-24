const router = require('express').Router();
const { authorizeRefresh } = require('../middlewares/handleCurrentUser')
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
const { validateUserSignUp, 
        validateUser, 
        validateUserEmail 
      } = require('../middlewares/validate');

router.post('/signup',validateUserSignUp, signUp);
router.get('/verify/:token',verifyEmail)
router.post('/resend', validateUserEmail, resendVerificationEmail);
router.post('/login', validateUser, logIn);
router.get('/refresh', authorizeRefresh, refresh); 
router.delete('/logout', authorizeRefresh, logOut);
router.post('/forget', validateUserEmail, forgetPassword);
router.post('/change', validateUser, changePassword);
router.put('/reset/:userId/:token', resetPassword);

module.exports = router;

