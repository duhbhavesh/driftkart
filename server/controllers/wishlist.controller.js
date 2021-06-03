const _ = require('lodash');

const getWishlistItems = async (req, res) => {
   let { wishlist } = req;
   try {
      wishlist = await wishlist
         .populate('wishlistItems.product')
         .execPopulate();
      res.json({ success: true, response: wishlist });
   } catch (err) {
      res.json({
         success: false,
         message: 'Unable to retrieve wishlist items',
         err: err.message,
      });
   }
};

const addWishlistItem = async (req, res) => {
   let { product } = req;
   let { wishlist } = req;
   try {
      if (!wishlist.wishlistItems.id(product._id)) {
         wishlist = _.extend(wishlist, {
            wishlistItems: _.concat(wishlist.wishlistItems, {
               _id: product._id,
               product: product._id,
               quantity: 1,
            }),
         });
         wishlist = await wishlist.save();
         wishlist = await wishlist
            .populate('wishlistItems.product')
            .execPopulate();
         res.json({ success: true, response: wishlist });
      } else {
         res.json({
            success: true,
            response: 'Product already exist in the wishlist',
         });
      }
   } catch (err) {
      res.json({
         success: false,
         message: 'Unable to add wishlist item',
      });
   }
};

const deleteWishlistItem = async (req, res) => {
   let { product } = req;
   let { wishlist } = req;
   try {
      await wishlist.wishlistItems.id(product._id).remove();
      await wishlist.save();
      wishlist = await wishlist
         .populate('wishlistItems.product')
         .execPopulate();
      res.json({ success: true, response: wishlist });
   } catch (err) {
      res.json({
         success: false,
         message: 'Unable to delete wishlist item',
         err: err.message,
      });
   }
};

module.exports = { getWishlistItems, addWishlistItem, deleteWishlistItem };
