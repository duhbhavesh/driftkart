const _ = require('lodash');

const getWishlistItems = async (req, res) => {
   let { wishlist } = req;

   try {
      wishlist = await wishlist
         .populate('wishlistItems.product')
         .execPopulate();
      console.log('wishlist', wishlist.wishlistItems);
      res.json({ success: true, response: wishlist.wishlistItems });
   } catch (error) {
      res.json({
         success: false,
         message: 'Unable to retrieve wishlist items',
         errorMessage: error.message,
      });
   }
};

const addWishlistItem = async (req, res) => {
   try {
      let { product } = req;
      let { wishlist } = req;
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
         res.json({ success: true, response: wishlist.wishlistItems });
      } else {
         res.json({
            success: true,
            message: 'Product already exist in the wishlist',
         });
      }
   } catch (error) {
      res.json({
         success: false,
         message: 'Unable to add wishlist item',
         errorMessage: error.message,
      });
   }
};

const deleteWishlistItem = async (req, res) => {
   try {
      let { product } = req;
      let { wishlist } = req;
      await wishlist.wishlistItems.id(product._id).remove();
      await wishlist.save();
      wishlist = await wishlist
         .populate('wishlistItems.product')
         .execPopulate();
      res.json({ success: true, response: wishlist.wishlistItems });
   } catch (error) {
      res.json({
         success: false,
         message: 'Unable to delete wishlist item',
         error: error.message,
      });
   }
};

module.exports = { getWishlistItems, addWishlistItem, deleteWishlistItem };
