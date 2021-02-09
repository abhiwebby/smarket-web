import User from '../models/userModel.js';
import config from '../config/config.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userCtrl = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      // validation
      // New User
      if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please fill all the fields' });
      }
      if (password.length < 6) {
        return res
          .status(400)
          .json({ message: 'Password should be min 6 characters' });
      }

      // Excisting User
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: 'This Email id is already exist' });
      }

      // password encryption
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      // save the user on mongoDB
      const newUser = new User({
        name,
        email,
        password: passwordHash,
        avatar: {
          public_id: 'avatars/user2_o8ztm5',
          url:
            'https://res.cloudinary.com/dyda4w37m/image/upload/v1612765764/avatars/user2_o8ztm5.jpg',
        },
      });

      await newUser.save();

      // JWT to authentication
      const accesstoken = createAccessToken({ id: newUser._id });
      const refreshtoken = createRefreshToken({ id: newUser._id });

      res.cookie('refreshtoken', refreshtoken, {
        httpOnly: true,
        path: '/user/refresh_token',
      });

      res.json({ accesstoken });
      // res.json({
      //   msg: 'Register Success!',
      // });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'User does not exist' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Incorrect Password' });
      }
      // if login success, create access token and refresh token
      const accesstoken = createAccessToken({ id: user._id });
      const refreshtoken = createRefreshToken({ id: user._id });

      res.cookie('refreshtoken', refreshtoken, {
        httpOnly: true,
        path: '/user/refresh_token',
      });
      res.json({ accesstoken });
    } catch (err) {
      return res.status(500).json({ msgs: err.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie('refreshtoken', { path: '/user/refresh_token' });
      return res.json({ msg: 'Logged Out!' });
    } catch (err) {
      return res.status(500).json({ msgs: err.message });
    }
  },
  refreshToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token) {
        return res.status(400).json({ msg: 'Please Login or Register' });
      }

      jwt.verify(rf_token, config.refreshTokenSecret, (err, user) => {
        if (err) {
          return res.status(400).json({ msg: 'Please Login or Register' });
        }

        const accesstoken = createAccessToken({ id: user.id });

        res.json({ user, accesstoken });
      });

      // res.json({ rf_token });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      if (!user) {
        return res.status(500).json({ msg });
      }
      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

const createAccessToken = (user) => {
  return jwt.sign(user, config.accessTokenSecret, { expiresIn: '1d' });
};

const createRefreshToken = (user) => {
  return jwt.sign(user, config.refreshTokenSecret, { expiresIn: '7d' });
};

export default userCtrl;
