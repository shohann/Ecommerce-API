const cloudinary = require('cloudinary').v2;
const { getCloudinaryName, 
        getCloudinaryAPIKey, 
        getCloudinaryAPISecret } = require('./appConfigs');
const { unlink } = require('fs').promises;

cloudinary.config({
    cloud_name: getCloudinaryName(),
    api_key: getCloudinaryAPIKey(),
    api_secret: getCloudinaryAPISecret(),
});

module.exports.cloudinaryUploader = async (localPath) => {
    const { secure_url } = await cloudinary.uploader.upload(localPath);
    await unlink(localPath);
    return secure_url;
};