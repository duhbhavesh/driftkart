const { User } = require('../models/user.model');
const { Wishlist } = require('../models/wishlist.model');
const { Cart } = require('../models/cart.model');
const { Product } = require('../models/product.model');

const getUserById = async (req, res, next, id) => {
   try {
      const user = await User.findById(id);
      if (!user) {
         throw Error('Unable to find the user');
      }
      req.user = user;
      next();
   } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
   }
};

const getWishlistById = async (req, res, next, id) => {
   try {
      const wishlist = await Wishlist.findById(id);
      if (!wishlist) {
         throw Error('Unable to find the wishlist');
      }
      req.wishlist = wishlist;
      next();
   } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
   }
};

const getCartById = async (req, res, next, id) => {
   try {
      const cart = await Cart.findById(id);
      if (!cart) {
         throw Error('Unable to find the cart');
      }
      req.cart = cart;
      next();
   } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
   }
};

const getProductById = async (req, res, next, id) => {
   try {
      const product = await Product.findById(id);
      if (!product) {
         throw Error('Unable to find the product');
      }
      req.product = product;
      next();
   } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
   }
};

module.exports = { getUserById, getWishlistById, getCartById, getProductById };
