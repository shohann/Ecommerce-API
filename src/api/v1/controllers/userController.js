const { generateHashedPassword, compareHashedPassword } = require('../utils/hash');
const { sendVerificationEmail } = require('../utils/email')

module.exports.signUp = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await generateHashedPassword(password);

        const verificationToken = '7277872778'
        await sendVerificationEmail(email, verificationToken);

        res.status(201).json({
            success: true,
            message: 'Verification email has been sent'
        })
    } catch (error) {
        // Duplication Error
        next(error);
    }
};

module.exports.verifyEmail = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
};

module.exports.resendVerificationEmail = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
}


module.exports.logIn = async (req, res, next) => {
    try {
        // const pass = await compareHashedPassword(password, hashedPassword)
    } catch (error) {
        
    }
};