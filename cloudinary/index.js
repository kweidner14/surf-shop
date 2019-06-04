const crypto = require('crypto');
const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'kweidner14',
    api_key: '426229323932382',
    api_secret: process.env.CLOUDINARY_SECRET
});

const cloudinaryStorage = require('multer-storage-cloudinary');
const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'surf-shop',
    allowedFormats: ['jpeg', 'jpg', 'png'],
    filename: function (req, file, cb) {
        let buf = crypto.randomBytes(16);
        buf = buf.toString('hex');
        let uniqFileName = file.originalname.replace(/\.jpeg|\.jpg|\.png/ig, '');
        uniqFileName += buf;
        cb(undefined, uniqFileName );
    }
});

module.exports = {
    cloudinary,
    storage
};