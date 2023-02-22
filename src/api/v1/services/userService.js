const { User } = require('../models/DBInit');

module.exports.createUser = async (name, email, password) => {
    return await User.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    });
};

module.exports.fetchUserByEmail = async (email) => {
    return await User.findUnique({
        where: {
            email: email
        }
    });
};

module.exports.fetchUserById = async (userId) => {
    return await User.findUnique({
        where: {
            id: userId
        }
    });
};

module.exports.updateUserPassword = async (userId, newPassword) => {
    return User.update({
        where: {
            id: userId
        },
        data: {
            password: newPassword
        }
    });
};