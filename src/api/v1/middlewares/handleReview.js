const { fetchReviewByUserAndProductId } = require('../services/reviewService');
const { fetchProductForReview } = require('../services/productService');
const { NotFound } = require('../utils/appErrors');

module.exports.checkProduct = async (req, res, next) => {
    try {
        const productId = req.params.productId;
        const product = await fetchProductForReview(productId);
        if (!product) throw new NotFound('Product not found');
        next();
    } catch (error) {
        next(error);
    }
};

module.exports.checkUsersReview = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const productId = req.params.productId;
        const comment = req.body.comment || null;
        const rating = req.body.rating;

        const review = await fetchReviewByUserAndProductId(userId, productId);

        if (review) {
            req.oldReview = review
        } 

        req.newReview = {
            comment: comment,
            rating: rating
        };
        next();
    } catch (error) {
        next(error)
    }
}