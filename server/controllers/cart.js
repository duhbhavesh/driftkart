const { CartItem } = require('../models/cart');

const getCartItems = async (req, res) => {
   let cart;
   try {
      cart = await CartItem.find({}).populate('_id');
      const cartItems = cart.map((item) => {
         const { _id, ...doc } = item._id._doc;
         return { id: _id, ...doc, quantity: item.quantity };
      });
      res.json({ success: true, cart: cartItems });
   } catch (err) {
      res.status(400).json({
         success: false,
         message: 'Error retrieving cart items',
         errMessage: err.errMessage,
      });
   }
};

const addCartItem = async (req, res) => {
   const cartItem = req.body;
   const newCartItem = new CartItem(cartItem);

   try {
      const saveCartItem = await newCartItem.save();
      res.status(201).json({
         success: true,
         message: 'Added a new item to cart',
         cartItem: saveCartItem,
      });
   } catch (err) {
      res.json(400).json({
         success: false,
         error: 'Error adding new product to cart',
         errMessage: err.errMessage,
      });
   }
};

const deleteCartItem = async (req, res) => {
   try {
      const { id } = req.params;
      await CartItem.findByIdAndDelete(id);
      res.json({
         success: true,
         message: 'Deleted cart Item',
      });
   } catch (err) {
      res.json({
         success: false,
         message: 'Error deleting cart Item',
         errMessage: err.errMessage,
      });
   }
};

module.exports = { getCartItems, addCartItem, deleteCartItem };
