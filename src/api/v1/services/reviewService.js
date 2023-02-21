const { Review } = require('../models/DBInit');

module.exports.createReview = async (userId, productId, comment, rating) => {
    return await Review.create({
        data: {
            userId: userId,
            productId: productId,
            comment: comment,
            rating: rating
        }
    });
};

module.exports.fetchReviewsByProductId = async (productId) => {
    return await Review.findMany({
        where: {
            productId: productId
        }
    });
};

module.exports.fetchReviewByUserAndProductId = async (userId, productId) => {
    return await Review.findUnique({
        where: {
            "userId_productId": {
                userId: userId,
                productId: productId
            }
        }
    });
};

module.exports.updateReviewById = async (reviewId, comment, rating) => {
    return await Review.update({
        where: {
            id: reviewId
        },
        data: {
            comment: comment,
            rating: rating
        }
    })
}
