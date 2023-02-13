const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    // JWT
    accessTokenSecret: 'ACCESS_TOKEN_SECRET',
    refreshTokenSecret: 'REFRESH_TOKEN_SECRET',
    verificationSecret: 'VERIFICATION_SECRET',
    passwordResetSecret: 'PASSWORD_RESET_SECRET',

    // Cloudinary
    cloudinaryName: 'CLOUDINARY_NAME',
    cloudinaryAPIKey: 'CLOUDINARY_API_KEY',
    cloudinaryAPISecret: 'CLOUDINARY_API_SECRET',

    // OAuth2
    oauth2ClientId:'OAUTH2_CLIENT_ID',
    oauth2ClientSecret:'OAUTH2_CLIENT_SECRET',
    oauth2RedirectUri: 'OAUTH2_REDIRECT_URI',
    oauth2RefreshToken:'OAUTH2_REFRESH_TOKEN',

    // Stripe
    stripeKey: 'STRIPE_KEY'
};
