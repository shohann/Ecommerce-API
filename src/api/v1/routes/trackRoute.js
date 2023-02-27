const router = require('express').Router();
const { authorizeAccess, 
        authorizeEmployee 
      } = require('../middlewares/handleCurrentUser');
const { getTrack, modifyTrack } = require('../controllers/trackController');

router.route('/:orderId')
      .get(authorizeAccess, getTrack)
      .patch(authorizeAccess, modifyTrack)


module.exports = router;
// otp order confirm , emloyee