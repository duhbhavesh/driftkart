const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET = 'okokok';

const { Cart } = require('../models/cart.model');
const { Wishlist } = require('../models/wishlist.model');
const { User } = require('../models/user.model');

const getUsers = async (req, res) => {
   try {
      const users = await User.find({});
      res.json({ success: true, users: users });
   } catch (err) {
      res.json({ success: false, message: 'Error getting user' });
   }
};

const findUserById = async (req, res, next, id) => {
   await User.findById(id).exec((err, user) => {
      if (err) {
         return res.status(404).json({
            success: false,
            message: 'User not found',
         });
      }
      req.user = user;
   });
};

const handleSignUp = async (req, res) => {
   try {
      const user = new User(req.body);
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      const savedUser = await user.save();

      const userCart = new Cart({ _id: savedUser._id });
      const savedCart = await userCart.save();

      const userWishlist = new Wishlist({ _id: savedUser._id });
      const savedWishlist = await userWishlist.save();

      await Cart.findOne({ _id: savedCart._id })
         .populate('_id')
         .exec(function (err, userCart) {
            console.log('The author is ', userCart);
         });
      await Wishlist.findOne({ _id: savedWishlist._id })
         .populate('_id')
         .exec(function (err, userWishlist) {
            console.log('The autor is', userWishlist);
         });

      res.json({
         success: true,
         user: savedUser,
         userCart: userCart,
         userWishlist: userWishlist,
      });
   } catch (err) {
      res.json({ success: false, err: err.message });
   }
};

const handleLogin = async (req, res) => {
   try {
      const { email, password } = req.body;

      const user = await User.findOne({ email: email });
      console.log(user);
      if (!user) {
         res.status(401).json({
            success: false,
            message: "User doesn't exist",
         });
      } else {
         const isValidPassword = await bcrypt.compare(password, user.password);

         if (isValidPassword) {
            const token = jwt.sign({ userID: user._id }, SECRET, {
               expiresIn: '24h',
            });
            res.status(200).json({
               success: true,
               message: 'Authentication Successful',
               response: { firstName: user.firstName, token },
            });
         } else {
            res.status(401).json({
               message: 'E-mail or Password is incorrect',
            });
         }
      }
   } catch (error) {
      res.json({ success: false, errMessage: error.message });
   }
};

module.exports = { findUserById, getUsers, handleSignUp, handleLogin };
