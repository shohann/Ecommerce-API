const { createUser, 
        fetchUserByEmail,
        fetchUserById,
        updateUserPassword,
        setUserSignUpCache, 
        getUserSignUpCache, 
        deleteUserSignUpCache, 
        setUserRefreshToken,
        deleteUserRefreshToken
      } = require('../services/userService');
const { generateVerificationToken, 
        decodeVerificationToken, 
        generateAccessToken, 
        generateRefreshToken,
        generatePasswordResetToken,
        decodePasswordResetToken 
      } = require('../utils/jwt');
const { generateHashedPassword, 
        compareHashedPassword 
      } = require('../utils/hash');
const { Unauthorized, 
        BadRequest 
      } = require('../utils/appErrors');
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
        // const link = `localhost:3001/api/v1/users/verify/${verificationToken}`;
        const link = `https://e-commerce-api-g5ua.onrender.com/api/v1/users/verify/${verificationToken}`;
        await setUserSignUpCache(email,{ name: name, email: email, password: hashedPassword });
        await sendVerificationEmail(email, link);

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
            throw new BadRequest('Invalid Verification Token');
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
        // const link = `localhost:3001/api/v1/users/verify/${verificationToken}`;
        const link = `https://e-commerce-api-g5ua.onrender.com/api/v1/users/verify/${verificationToken}`;
        await setUserSignUpCache(email, userCache);
        await sendVerificationEmail(email, link);

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

module.exports.refresh = async (req, res, next) => {
    try {
        const { email, id, role } = req.user;
        const accessToken = generateAccessToken(email, id, role);
        const refreshToken = generateRefreshToken(email, id, role);
        await setUserRefreshToken(email, refreshToken);

        res.status(200)
           .json({
                success: true,
                message: {
                    accessToken: accessToken,
                    refreshToken: refreshToken
            }
        });
    } catch (error) {
        next(error)
    }
};

module.exports.logOut = async (req, res, next) => {
    try {
        const { email } = req.user; 
        await deleteUserRefreshToken(email);

        res.status(200)
           .json({
                success: true,
                message: `Logout finished for the email ${email}`
        })
    } catch (error) {
        next(error)
    }
};

module.exports.forgetPassword = async (req, res, next) => {
    try {
        const email = req.body.email;
        const user = await fetchUserByEmail(email);
        if (!user) throw new Unauthorized('There is no user with this email')

        const token = generatePasswordResetToken(email, user.password);
        // const resetLink = `localhost:3001/api/v1/users/reset/${user.id}/${token}`;
        const resetLink = `https://e-commerce-api-g5ua.onrender.com/api/v1/users/reset/${user.id}/${token}`;

        await sendVerificationEmail(email, resetLink);

        res.status(200)
           .json({
             success: true,
             message: `Email has been sent to ${email}`
        });
    } catch (error) {
        next(error)
    }
};

module.exports.changePassword = async (req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await fetchUserByEmail(email);
        if (!user || !(await compareHashedPassword(password, user.password))) {
            throw new Unauthorized('Invalid email or password');
        }
        
        const token = generatePasswordResetToken(email, user.password);
        // const resetLink = `localhost:3001/api/v1/users/reset/${user.id}/${token}`;
        const resetLink = `https://e-commerce-api-g5ua.onrender.com/api/v1/users/reset/${user.id}/${token}`;

        await sendVerificationEmail(email, resetLink);

        res.status(200)
           .json({
             success: true,
             message: `Email has been sent ${email}`,
        });
    } catch (error) {
        next(error)
    }
};

module.exports.resetPassword = async (req, res, next) => {
    try {
        const { userId, token } = req.params;
        const newPassword = req.body.password;
        const hashedPassword = await generateHashedPassword(newPassword); 
        const user = await fetchUserById(userId);
        if (!user) throw new Unauthorized('Invalid user');
        const decoded = decodePasswordResetToken(token, user.password)
        if (!decoded) throw new BadRequest('Invalid token');

        const { email, id, role } = await updateUserPassword(userId, hashedPassword);
        const accessToken =  await generateAccessToken(email, id, role);
        const refreshToken = await generateRefreshToken(email, id, role);
        await setUserRefreshToken(email, refreshToken);
        
        res.status(200)
           .json({
             success: true,
             message: {
                accessToken: accessToken,
                refreshToken: refreshToken
             }
        });
    } catch (error) {
        next(error)
    }
};



