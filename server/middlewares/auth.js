import jwt from 'jsonwebtoken';
import config from '../config/config.js';

const auth = (req, res, next) => {
  try {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(400).json({ msg: 'Invalid Authentication' });
    }
    jwt.verify(token, config.accessTokenSecret, (err, user) => {
      if (err) {
        return res.status(400).json({ msg: 'Invalid Authentication' });
      }
      req.user = user;
      next();
    });
  } catch (err) {
    return res.status(500).json({ msgs: err.message });
  }
};

export default auth;
