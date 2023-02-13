const { Profile } = require('../models/DBInit');

module.exports.createProfile = async (userId, phone, address) => {
    return await Profile.create({ // Without await
        data: {
            userId: userId,
            phone: phone,
            address: address
        }
    });
};

module.exports.fetchProfileAddress = async (userId) => {
    return await Profile.findUnique({
        where: {
            userId: userId
        },
        select: {
            address: true
        }
    });
};