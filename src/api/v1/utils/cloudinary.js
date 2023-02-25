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
    const { secure_url, public_id } = await cloudinary.uploader.upload(localPath);
    await unlink(localPath);
    return {
        image: secure_url,
        cloudId: public_id
    }
};