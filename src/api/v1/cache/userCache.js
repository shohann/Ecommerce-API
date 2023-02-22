const { cacheClient } = require('./cacheDBInit');
const { getVerifyEmailEX, getRefreshTokenCacheEX } = require('../utils/appConfigs');

// USER SERVICE
// JWT refresh ttl === refresh redis ttl and verfication token and redis key ttl

// SignUp
module.exports.setUserSignUpCache = async (email, user) => {
    const verifyEmailEX = getVerifyEmailEX();
    await cacheClient.set(email, JSON.stringify(user), { EX: verifyEmailEX });
};

module.exports.getUserSignUpCache = async (email) => {
    return JSON.parse(await cacheClient.get(email));
};

module.exports.deleteUserSignUpCache = async (email) => {
    await cacheClient.del(email);
};

// Refresh token
module.exports.setUserRefreshToken = async (email, refreshToken) => {
    const refreshTokenCacheEX = getRefreshTokenCacheEX()
    await cacheClient.set(email, refreshToken, { EX: refreshTokenCacheEX });
};

module.exports.getUserRefreshToken = async (email) => {
    return await cacheClient.get(email);
};

module.exports.deleteUserRefreshToken = async (email) => {
    await cacheClient.del(email);
};
