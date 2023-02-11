const { createUser, fetchUserByEmail } = require('../services/userService');
const { setUserSignUpCache, getUserSignUpCache, deleteUserSignUpCache } = require('../cache/userCache')
const { generateHashedPassword, compareHashedPassword } = require('../utils/hash');
const { Unauthorized } = require('../utils/appErrors');
const { sendVerificationEmail } = require('../utils/email');

module.exports.signUp = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await generateHashedPassword(password);

        const user = await createUser(name, email, hashedPassword);

        await setUserSignUpCache(email,{ name, email, hashedPassword })

        // const verificationToken = '7277872778' // Using JWT
        // await sendVerificationEmail(email, verificationToken);

        res.status(201).json({
            success: true,
            message: 'Verification email has been sent'
        })
    } catch (error) {
        // Duplication Error
        // console.log(error);
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
        const { email, password } = req.body;
        const  user = await fetchUserByEmail(email);

        if (!user || !(await compareHashedPassword(password, user.password))) {
            throw new Unauthorized('Invalid email or password');
        }
        
        res.status(200).json({
            success: true,
            message: 'LoggedIn'
        });
    } catch (error) {
        next(error);
    }
};
