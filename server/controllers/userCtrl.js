import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import User from '../models/userModel.js';

export const addUser = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    // validation
    // New User
    if (!email || !password) {
      return res.status(400).json({ message: 'Please fill the fields' });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: 'Password should be min 6 characters' });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Password is not matching' });
    }

    // Excisting User
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: 'An account with Email id already exist' });
    }

    // hash password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // save the user
    const newUser = new User({
      email,
      password: passwordHash,
    });
    const savedUser = await newUser.save();
    console.log(passwordHash);
  } catch (err) {
    console.error(err);
  }
};
