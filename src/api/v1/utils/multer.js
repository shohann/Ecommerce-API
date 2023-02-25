const multer = require("multer");
const { BadRequest } = require('./appErrors');
const fileMaxSize = require('./appConfigs').getFileMaxSize();

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,  "public/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

module.exports.multerUpload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
        } else {
          cb(null, false);
          return cb(new BadRequest('Only .png, .jpg and .jpeg format allowed!'));
        }
    },
    limits: { fileSize: fileMaxSize }
    
}).single("file");






// multer setings

// product upload -> func export

// there might another file upload like profile photo function


// const { cloudinaryUploader } = require('../utils/cloudinary');
// const { ApplicationError } = require('../utils/appError');
// const { unlink } = require('fs').promises;

// module.exports.uploadToCloud = async (req, res, next) => {
//     const localPath = req.file.path;
//     try {
//         const image = await cloudinaryUploader(localPath);
//         if (!image) throw new ApplicationError('Internal server error');
//         req.image = image;
//         await unlink(localPath);
//         next();
//     } catch (error) {
//         await unlink(localPath);
//         next(error);
//     }
// };