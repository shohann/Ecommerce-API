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