const { createProfile,
        fetchProfile,
        updateProfile
      } = require('../services/profileService');
const { Conflict, NotFound } = require('../utils/appErrors');

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

module.exports.getProfile = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const profile = await fetchProfile(userId);
        if (!profile) throw new NotFound('Profile not found');

        res.status(200)
           .json({
                success: true,
                message: profile
        });   
    } catch (error) {
        next(error);
    }
}

module.exports.modifyProfile = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const profile = req.body;
        const updatedProfile = await updateProfile(userId, profile);

        res.status(200)
           .json({
             success: true,
             message: updatedProfile
        })
    } catch (error) {
        next(error);
    }
};


