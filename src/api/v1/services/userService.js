const { User } = require('../models/DBInit');

module.exports.createUser = async (name, email, password) => {
    return User.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    });
};

module.exports.fetchUserByEmail = async (email) => {
    return User.findUnique({
        where: {
            email: email
        }
    });
};