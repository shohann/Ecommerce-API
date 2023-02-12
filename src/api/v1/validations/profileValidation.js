const Joi = require('joi');

module.exports.profileValidation = profile => {
    const schema = Joi.object({
        phone: Joi.string().min(8).max(255).required(),
        address: Joi.string().min(5).max(255).required(),
    });
    return schema.validate(profile,  {  abortEarly: false });
};

