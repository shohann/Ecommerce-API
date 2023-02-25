const { multerUpload } = require('../utils/multer');
const { cloudinaryUploader } = require('../utils/cloudinary');
const { ApplicationError, BadRequest } = require('../utils/appErrors');
const { unlink } = require('fs').promises;

module.exports.localUpload = (req, res, next) => {
    multerUpload(req, res, function (error) {
        if (error) {
            if (error.code === 'LIMIT_FILE_SIZE') {
                return next(new BadRequest('File too large'));
            }
            next(error);
        } 
        if (!req.file) {
          next(new BadRequest('You must provide a file'));
        }
        next();
    });
};







module.exports.cloudUpload = async (req, res, next) => {
    const localPath = req.file.path;
    try {
        const image = await cloudinaryUploader(localPath);
        if (!image) throw new ApplicationError('Internal server error');
        req.image = image;
        await unlink(localPath);
        next();
    } catch (error) {
        await unlink(localPath);
        next(error);
    }
};
