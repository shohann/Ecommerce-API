const { userSignUpValidation, 
        userValidation,
        userEmailValidation
      } = require('../validations/userValidation');
const { profileValidation,
        profileUpdationValidation
      } = require('../validations/profileValidation');
const { productValidation } = require('../validations/productValidation');
const { categoryValidation } = require('../validations/categoryValidation');
const { reviewValidation } = require('../validations/reviewValidation');
const { trackValidation } = require('../validations/trackValidation');
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

module.exports.validateUser = (req, res, next) => {
    try {
        const { email, password } = req.body
        const { error } = userValidation({
            email: email,
            password: password
        });
    
        if (error) {
            throw new BadRequest('Invalid Email or password'); 
        } else {
            next();
        }
    } catch (error) {
        next(error);
    }
};

module.exports.validateUserEmail = (req, res, next) => {
    try {
        const { email } = req.body
        const { error } = userEmailValidation({
            email: email
        });
    
        if (error) {
            throw new BadRequest('Invalid Email'); 
        } else {
            next();
        }
    } catch (error) {
        next(error);
    }
}

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

module.exports.validateProfileUpdation = (req, res, next) => {
    try {
        const profile = req.body

        if (!profile.address && !profile.phone) {
            throw new BadRequest('Atleast 1 field required');
        }

        const { error } = profileUpdationValidation(profile);
    
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

module.exports.validateProduct = (req, res, next) => {
    try {
        req.body.price = parseInt(req.body.price);
        req.body.stock = parseInt(req.body.stock);
        const { name, category, price, stock, desc } = req.body;
        const { error } = productValidation({
            name: name,
            category: category,
            price: price,
            stock: stock,
            desc: desc
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
}

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
};

module.exports.validateTrack = (req, res, next) => {
    try {
        const { status } = req.body

        const { error } = trackValidation({
            status: status
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
