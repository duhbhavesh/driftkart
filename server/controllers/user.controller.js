const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET = process.env.SECRET;

const { User } = require('../models/user.model');

const getUsers = async (req, res) => {
   try {
      const users = await User.find({});
      res.json({ success: true, users: users });
   } catch (error) {
      res.json({
         success: false,
         message: 'Error getting user',
         errorMessage: error.message,
      });
   }
};

const handleSignUp = async (req, res) => {
   try {
      const { email } = req.body;
      const user = await User.findOne({ email: email });

      if (user) {
         res.json({
            message: 'User already exist with this email',
         });
      }
      const newUser = new User(req.body);
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(newUser.password, salt);
      await newUser.save();

      res.status(201).json({ success: true, message: 'User signed up' });
   } catch (error) {
      console.log(error);
      res.status(401).json({
         success: false,
         message: 'Something went wrong!',
         errorMessage: error.message,
      });
   }
};

const handleLogin = async (req, res) => {
   try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
         throw new Error('User does not exist, Signup to enter');
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
         throw new Error('Email and password does not match');
      }
      const token = jwt.sign({ userId: user._id }, SECRET, {
         expiresIn: '24h',
      });

      res.json({ success: true, token });
   } catch (error) {
      return res.status(401).json({ success: false, error: error.message });
   }
};

module.exports = { getUsers, handleSignUp, handleLogin };
