const router = require('express').Router();
const { setProfile } = require('../controllers/profileController');

const { validateProfile } = require('../middlewares/validate');

router.route('/')
      .post(validateProfile, setProfile)

module.exports = router;