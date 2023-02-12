const Joi = require('joi');

module.exports.categoryValidation = category => {
    const schema = Joi.object({
        categoryName: Joi.string().min(3).max(255).required(),
    });
    return schema.validate(category,  {  abortEarly: false });
};

