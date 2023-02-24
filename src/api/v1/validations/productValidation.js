

const Joi = require('joi');

module.exports.newsValidation = news => {
    const schema = Joi.object({
        header: Joi.string().min(2).max(30).required(),
        categoryName: Joi.string().min(2).max(20).required(),
        newsText: Joi.string().min(2).max(2000).required(),
    });
    return schema.validate(news,  {  abortEarly: false });
};