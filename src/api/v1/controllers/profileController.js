const { createProfile } = require('../services/profileService')

const { Conflict } = require('../utils/appErrors');

module.exports.setProfile = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { phone, address } = req.body;
        await createProfile(userId, phone, address);

        res.status(201).json({
            success: true,
            message: `Profile has been created`
        });
    } catch (error) {
        if (error.code === 'P2002') {
            next(new Conflict('Profile already exists for this user'));
        } else {
            next(error);
        }
    }
};


module.exports.modifyProfile = async (req, res, next) => {
    // required
};

// get

