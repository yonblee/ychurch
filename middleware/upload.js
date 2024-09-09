const multer = require("multer");
const sharp = require("sharp");
const path = require("node:path");

const dest = "./public/images";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dest);
  },
  filename: (req, file, cb) => {
    cb(null, "IMG_" + Date.now() + path.extname(file.originalname));
  },
  resize: (req, file, cb) => {
    sharp(file.buffer)
      .resize(270, 250) // Resize the image to 270px x 250px
      .toBuffer((err, buffer) => cb(err, buffer));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Only .jpg, .png, and .gif files are allowed!'), false);
    }
    cb(null, true);
  }
});

module.exports = upload
