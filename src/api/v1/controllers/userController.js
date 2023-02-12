const { createUser, 
        fetchUserByEmail } = require('../services/userService');

const { setUserSignUpCache, 
        getUserSignUpCache, 
        deleteUserSignUpCache, 
        setUserRefreshToken } = require('../cache/userCache');

const { generateVerificationToken, 
        decodeVerificationToken, 
        generateAccessToken, 
        generateRefreshToken } = require('../utils/jwt');

const { generateHashedPassword, 
        compareHashedPassword } = require('../utils/hash');
const { Unauthorized, 
        BadRequest } = require('../utils/appErrors');

const { sendVerificationEmail } = require('../utils/email');


module.exports.signUp = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await fetchUserByEmail(email);

        if (user) {
            throw new BadRequest('User already has an account');
        }

        const hashedPassword = await generateHashedPassword(password); 
        const verificationToken = generateVerificationToken(email);
        await setUserSignUpCache(email,{ name: name, email: email, password: hashedPassword });
        await sendVerificationEmail(email, verificationToken);

        res.status(201).json({
            success: true,
            message: `Verification link has been sent to ${email}`
        });
    } catch (error) {
        next(error);
    }
};

module.exports.verifyEmail = async (req, res, next) => {
    try {
        const token = req.params.token;
        const { email } = decodeVerificationToken(token);
        const userCache = await getUserSignUpCache(email);

        if (!email || email !== userCache.email) {
            throw new BadRequest('Invalid Token')
        }

        const user = await createUser(userCache.name, userCache.email, userCache.password);
        await deleteUserSignUpCache(email);

        const accessToken = generateAccessToken(user.email, user.id, user.role);
        const refreshToken = generateRefreshToken(user.email, user.id, user.role);
        await setUserRefreshToken(email, refreshToken);

        res.status(201).json({
            success: true,
            message: {
                accessToken: accessToken,
                refreshToken: refreshToken
            }
        });
    } catch (error) {
        next(error);
    }
};

module.exports.resendVerificationEmail = async (req, res, next) => {
    try {
        const { email } = req.body;
        const userCache = await getUserSignUpCache(email);

        if (!userCache) {
            throw new BadRequest('Invalid request');
        }
        
        const verificationToken = generateVerificationToken(email);
        await setUserSignUpCache(email, userCache);
        await sendVerificationEmail(email, verificationToken);

        res.status(201).json({
            success: true,
            message: `verification link has been sent to ${email}`
        });
        
    } catch (error) {
        next(error)
    }
};

module.exports.logIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const  user = await fetchUserByEmail(email);

        if (!user || !(await compareHashedPassword(password, user.password))) {
            throw new Unauthorized('Invalid email or password');
        }

        const accessToken = generateAccessToken(user.email, user.id, user.role);
        const refreshToken = generateRefreshToken(user.email, user.id, user.role);
        await setUserRefreshToken(email, refreshToken);
        
        res.status(200).json({
            success: true,
            message: {
                accessToken: accessToken,
                refreshToken: refreshToken
            }
        });
    } catch (error) {
        next(error);
    }
};
