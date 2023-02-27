const Joi = require('joi');

module.exports.productValidation = product => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(30).required(),
        category: Joi.string().required(),
        price: Joi.number().min(1).required(),
        stock: Joi.number().min(1).required(),
        desc: Joi.string().min(5).max(300).required(),
    });
    return schema.validate(product,  {  abortEarly: false });
};

module.exports.addStockValidation = product => {
    const schema = Joi.object({
        stock: Joi.number().min(1).required()
    });
    return schema.validate(product,  {  abortEarly: false });
};