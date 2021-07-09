const _ = require('lodash');

const getCartItems = async (req, res) => {
   try {
      let { cart } = req;
      cart = await cart.populate('cartItems.product').execPopulate();
      console.log(cart.cartItems);
      res.json({ success: true, response: cart.cartItems });
   } catch (error) {
      res.status(400).json({
         success: false,
         message: 'Unable to retrieve Cart Items',
         errorMessage: error.message,
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
         res.json({ success: true, response: cart.cartItems });
      } else {
         res.json({
            success: false,
            response: 'Product already exist in the cart',
         });
      }
   } catch (error) {
      res.json({
         success: false,
         message: 'Unable to add cart item',
         errorMessage: error.message,
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
      res.json({ success: true, response: cart.cartItems });
   } catch (error) {
      res.json({
         success: false,
         message: 'Unable to delete cart item',
         errorMessage: error.message,
      });
   }
};

module.exports = { getCartItems, addCartItem, deleteCartItem };
