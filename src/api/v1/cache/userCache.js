const { cacheClient } = require('./cacheDBInit');
const { getVerifyEmailEX } = require('../utils/appConfigs');

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



//  refresh token

// forget password 

// update password

