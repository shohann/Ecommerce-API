const { Profile } = require('../models/DBInit');

module.exports.createProfile = async (userId, phone, address) => {
    return await Profile.create({
        data: {
            userId: userId,
            phone: phone,
            address: address
        }
    });
};

module.exports.fetchProfile = async (userId) => {
    return await Profile.findUnique({
        where: {
            userId: userId
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

module.exports.updateProfile = async (userId, profile) => {
    return await Profile.update({
        where: {
            userId: userId
        },
        data: profile
    });
};