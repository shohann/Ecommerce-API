const router = require('express').Router();
const { authorizeAccess, 
        authorizeEmployee 
      } = require('../middlewares/handleCurrentUser');
const { validateTrack } = require('../middlewares/validate');
const { checkTrackStatus } = require('../middlewares/checkTrackStatus');
const { getTrack, modifyTrack } = require('../controllers/trackController');

router.route('/:orderId')
      .get(authorizeAccess, 
           getTrack)
      .patch(authorizeAccess, 
            authorizeEmployee,
            validateTrack, 
            checkTrackStatus, 
            modifyTrack)

module.exports = router;
