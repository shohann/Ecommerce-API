const multer = require("multer");
const { BadRequest } = require('../utils/appError');
const fileMaxSize = require('./appConfigs').getFileMaxSize();

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,  "public/uploads/");
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



// app.use(function (err, req, res, next) {
//   if (err.code === 'LIMIT_FILE_SIZE') {
//     res.send({ result: 'fail', error: { code: 1001, message: 'File is too big' } })
//     return 
//   }
//   // Handle any other errors
// })



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