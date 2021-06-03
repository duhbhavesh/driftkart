const _ = require('lodash');

const getCartItems = async (req, res) => {
   let { cart } = req;
   try {
      cart = await cart.populate('cartItems.product').execPopulate();
      res.json({ success: true, response: cart });
   } catch (err) {
      res.json({
         success: false,
         message: 'Unable to retrive cart items',
         err: err.message,
      });
   }
};

const addCartItem = async (req, res) => {
   let { product } = req;
   let { cart } = req;
   try {
      if (!cart.cartItems.id(product._id)) {
         cart = _.extend(cart, {
            cartItems: _.concat(cart.cartItems, {
               _id: product._id,
               product: product._id,
               quantity: 1,
            }),
         });
         cart = await cart.save();
         cart = await cart.populate('cartItems.product').execPopulate();
         res.json({ success: true, response: cart });
      } else {
         res.json({
            success: true,
            response: 'Product already exist in the cart',
         });
      }
   } catch (err) {
      res.json({
         success: false,
         message: 'Unable to add cart item',
         err: err.message,
      });
   }
};

const deleteCartItem = async (req, res) => {
   let { product } = req;
   let { cart } = req;
   try {
      await cart.cartItems.id(product._id).remove();
      await cart.save();
      cart = await cart.populate('cartItems.product').execPopulate();
      res.json({ success: true, response: cart });
   } catch (err) {
      res.json({
         success: false,
         message: 'Unable to delete cart item',
         err: err.message,
      });
   }
};

module.exports = { getCartItems, addCartItem, deleteCartItem };
