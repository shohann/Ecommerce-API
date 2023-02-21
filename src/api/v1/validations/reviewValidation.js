const Joi = require('joi');

module.exports.reviewValidation = review => {
    const schema = Joi.object({
        comment: Joi.string().min(3).max(255),
        rating: Joi.number().min(1).max(5).required()
    });
    return schema.validate(review,  {  abortEarly: false });
};
