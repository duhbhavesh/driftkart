const { User } = require('../models/user.model');
const { Wishlist } = require('../models/wishlist.model');
const { Cart } = require('../models/cart.model');
const { Product } = require('../models/product.model');

const getWishlistById = async (req, res, next) => {
   try {
      const wishlist = await Wishlist.findById(req.userId);
      if (!wishlist) {
         const userWishlist = new Wishlist({
            _id: req.userId,
         });
         await userWishlist.save();
         return res.json({
            response: userWishlist.wishlistItems,
         });
      }
      req.wishlist = wishlist;
      next();
   } catch (error) {
      return res
         .status(400)
         .json({ success: false, errorMessage: error.message });
   }
};

const getCartById = async (req, res, next) => {
   try {
      const cart = await Cart.findById(req.userId);
      if (!cart) {
         const userCart = new Cart({
            _id: req.userId,
         });
         await userCart.save();
         return res.json({ response: userCart.cartItems });
      }
      req.cart = cart;
      next();
   } catch (error) {
      return res
         .status(400)
         .json({ success: false, errorMessage: error.message });
   }
};

const getUserById = async (req, res, next, id) => {
   try {
      const user = await User.findById(id);
      if (!user) {
         throw Error('Unable to find the user');
      }
      req.user = user;
      next();
   } catch (error) {
      return res
         .status(400)
         .json({ success: false, errorMessage: error.message });
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
   } catch (error) {
      return res
         .status(400)
         .json({ success: false, errorMessage: error.message });
   }
};

module.exports = { getUserById, getWishlistById, getCartById, getProductById };
