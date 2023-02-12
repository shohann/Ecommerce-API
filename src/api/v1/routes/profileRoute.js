const router = require('express').Router();
const { setProfile } = require('../controllers/profileController');

const { validateProfile } = require('../middlewares/validate');
const { authorizeAccess } = require('../middlewares/handleCurrentUser');

router.route('/')
      .post(validateProfile, authorizeAccess, setProfile)

module.exports = router;