const router = require('express').Router();
const { setProfile, 
        getProfile,
        modifyProfile
      } = require('../controllers/profileController');

const { validateProfile, 
        validateProfileUpdation 
      } = require('../middlewares/validate');
const { authorizeAccess } = require('../middlewares/handleCurrentUser');

router.route('/')
      .post(authorizeAccess, validateProfile, setProfile)
      .get(authorizeAccess, getProfile)
      .put(authorizeAccess, validateProfileUpdation, modifyProfile) // validatios

module.exports = router;