const { 
        userSignUpValidation, 
        userLogInValidation 
      } = require('../validations/userValidation');
const { profileValidation } = require('../validations/profileValidation');
const { categoryValidation } = require('../validations/categoryValidation');
const { reviewValidation } = require('../validations/reviewValidation')


const { BadRequest } = require('../utils/appErrors');

module.exports.validateUserSignUp = (req, res, next) => {
    try {
        const { name, email, password } = req.body
        const { error } = userSignUpValidation({
            name: name,
            email: email,
            password: password
        });
    
        if (error) {
            const messages = error.details.map(error => error.message);
            throw new BadRequest(messages);
        } else {
            next();
        }
    } catch (error) {
        next(error);
    }
};

module.exports.validateUserLogIn = (req, res, next) => {
    try {
        const { email, password } = req.body
        const { error } = userLogInValidation({
            email: email,
            password: password
        });
    
        if (error) {
            throw new BadRequest('Invalid Email or password'); // **
        } else {
            next();
        }
    } catch (error) {
        next(error);
    }
};

module.exports.validateProfile = (req, res, next) => {
    try {
        const { phone, address } = req.body

        const { error } = profileValidation({
            phone: phone,
            address: address
        });
    
        if (error) {
            const messages = error.details.map(error => error.message);
            throw new BadRequest(messages);
        } else {
            next();
        }
    } catch (error) {
        next(error);
    }
};

module.exports.validateCategory = (req, res, next) => {
    try {
        const { categoryName } = req.body

        const { error } = categoryValidation({
            categoryName: categoryName
        });
    
        if (error) {
            throw new BadRequest(error.message);
        } else {
            next();
        }
    } catch (error) {
        next(error);
    }
};

module.exports.validateReview = (req, res, next) => {
    try {
        const { comment, rating } = req.body;
        const { error } = reviewValidation({
            comment: comment,
            rating: rating
        })

        if (error) {
            const messages = error.details.map(error => error.message);
            throw new BadRequest(messages);
        } else {
            next();
        }
    } catch (error) {
        next(error)
    }
}