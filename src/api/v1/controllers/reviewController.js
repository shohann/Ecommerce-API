const { createReview, 
        updateReviewById,
        fetchReviewsByProductId
      } = require('../services/reviewService');

module.exports.setReview = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const productId = req.params.productId;
        const oldReview = req.oldReview;
        const newReview = req.newReview;

        if (oldReview) {
            const updatedReview =  await updateReviewById(oldReview.id, newReview.comment, newReview.rating)
            
            return res.status(201)
               .json({
                    success: true,
                    message: `Review updated ID: ${updatedReview.id}`
            });
        }

        const review = await createReview(userId, productId, newReview.comment, newReview.rating);

        res.status(201)
           .json({
               success: true,
               message: `Review created by ID: ${review.id}`
        });
    } catch (error) {
        next(error);
    }
};

module.exports.getReviews = async (req, res, next) => {
    try {
        const productId = req.params.productId;
        const reviews = await fetchReviewsByProductId(productId);

        res.status(200).json({
            success: true,
            message: reviews
        });
    } catch (error) {
        console.log(error);
        next(error)
    }
};


