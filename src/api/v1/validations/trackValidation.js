const Joi = require('joi');

module.exports.trackValidation = track => {
    const schema = Joi.object({
        status: Joi.string().required()
    });
    return schema.validate(track,  {  abortEarly: false });
};
