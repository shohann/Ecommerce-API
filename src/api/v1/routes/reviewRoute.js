const router = require('express').Router();
const { authorizeAccess } = require('../middlewares/handleCurrentUser');
const { checkProduct, checkUsersReview } = require('../middlewares/handleReview');
const { validateReview } = require('../middlewares/validate')
const { setReview, getReviews } = require('../controllers/reviewController');

router.route('/:productId')
      .get(authorizeAccess, getReviews)
      .post(authorizeAccess, validateReview, checkProduct, checkUsersReview, setReview)

module.exports = router;

// auth, product available, already done or not, validation