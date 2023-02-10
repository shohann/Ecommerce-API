const { generateHashedPassword, compareHashedPassword } = require('../utils/hash');

module.exports.signUp = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await generateHashedPassword(password);

    
        res.status(201).json({
            success: true,
            message: 'User created'
        })
    } catch (error) {
        // Duplication Error
        next(error);
    }
};


module.exports.logIn = async (req, res, next) => {
    try {
        // const pass = await compareHashedPassword(password, hashedPassword)
    } catch (error) {
        
    }
};