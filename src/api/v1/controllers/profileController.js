const { createProfile } = require('../services/profileService')

// Errors
const { Conflict } = require('../utils/appErrors');

module.exports.setProfile = async (req, res, next) => {
    try {
        const userId = "7d71676b-8325-438b-a788-0ecec96c9a05"; // will come form req.user.id
        const { phone, address } = req.body;
        const profile = await createProfile(userId, phone, address);

        res.status(201).json({
            success: true,
            message: `Profile has been created by id ${profile.id}`
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

};

