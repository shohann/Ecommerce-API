const router = require('express').Router();
const { setProfile } = require('../controllers/profileController')

router.route('/')
      .post(setProfile)

module.exports = router;