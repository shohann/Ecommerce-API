const { cacheClient } = require('./cacheDBInit');
const { getCartCacheEx } = require('../utils/appConfigs');

module.exports.setCartCache = async (userId, cart) => {
    const cartCacheEx = getCartCacheEx();
    await cacheClient.set(userId, JSON.stringify(cart), { EX: cartCacheEx });
};

module.exports.getCartCache = async (userId) => {
    return JSON.parse(await cacheClient.get(userId));
};

module.exports.deleteCartCache = async (userId) => {
    
};