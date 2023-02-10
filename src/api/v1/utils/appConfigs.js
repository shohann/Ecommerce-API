const config = require('config');

// Bcrypt
module.exports.getSaltRounds = () => config.get('saltRounds');

// Port
module.exports.getPort = () => config.get('port');

// Redis
module.exports.getRedisHost = () => config.get('redisHost');
module.exports.getRedisPort = () => config.get('redisPort');

// JWT
module.exports.getAccessTokenSecret = () => config.get('accessTokenSecret');
module.exports.getRefreshTokenSecret = () => config.get('refreshTokenSecret');
module.exports.getVerificationSecret = () => config.get('verificationSecret');
module.exports.getPasswordResetSecret = () => config.get('passwordResetSecret');

// Cloudinary
module.exports.getCloudinaryName = () => config.get('cloudinaryName');
module.exports.getCloudinaryAPIKey = () => config.get('cloudinaryAPIKey');
module.exports.getCloudinaryAPISecret = () => config.get('cloudinaryAPISecret');

// OAuth2
module.exports.getOauth2ClientId = () => config.get('oauth2ClientId');
module.exports.getOauth2ClientSecret = () => config.get('oauth2ClientSecret');
module.exports.getOauth2RedirectUri = () => config.get('oauth2RedirectUri');
module.exports.getOauth2RefreshToken = () => config.get('oauth2RefreshToken');

// Nodemailer
module.exports.getEmailSender = () => config.get('emailSender');
module.exports.getSmtpHost = () => config.get('smtpHost');
module.exports.getSmtpPort = () => config.get('smtpPort');
module.exports.getNodemailerAuthType = () => config.get('nodemailerAuthType');


