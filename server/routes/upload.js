import express from 'express';
import cloudinary from 'cloudinary';
import config from '../config/config.js';
import auth from '../middlewares/auth.js';
import authAdmin from '../middlewares/authAdmin.js';

const router = express.Router();

// upload image
router.post('/upload', (req, res) => {
  try {
    console.log(req.files);
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ msg: 'No files were uploaded' });
    }
    const file = req.files.file;
    if (file.size > 1024 * 1024) {
      return res.status(400).json({ msg: 'Size too large' });
    }
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
      return res.status(400).json({ msg: 'File format is incorrect' });
    }
    res.json('test upload');
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

export default router;
