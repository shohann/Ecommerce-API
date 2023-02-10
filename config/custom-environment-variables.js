const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    accessTokenSecret: 'ACCESS_TOKEN_SECRET',
    refreshTokenSecret: 'REFRESH_TOKEN_SECRET',
    verificationSecret: 'VERIFICATION_SECRET',
    passwordResetSecret: 'PASSWORD_RESET_SECRET',
    cloudinaryName: 'CLOUDINARY_NAME',
    cloudinaryAPIKey: 'CLOUDINARY_API_KEY',
    cloudinaryAPISecret: 'CLOUDINARY_API_SECRET'
};
