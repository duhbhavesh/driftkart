const { WishlistItem } = require('../models/wishlist');

const getWishlistItems = async (req, res) => {
   let wishList;
   try {
      wishList = await WishlistItem.find({}).populate('_id');
      const wishlistItems = wishList.map((item) => {
         const { _id, ...doc } = item._id._doc;
         return { id: _id, ...doc };
      });
      res.json({ success: true, wishList: wishlistItems });
   } catch (err) {
      res.status(400).json({
         success: false,
         message: 'Error retrieving wishlist items',
         errMessage: err.errMessage,
      });
   }
};

const addWishlistItem = async (req, res) => {
   const wishlistItem = req.body;
   const newWishlistItem = new WishlistItem(wishlistItem);

   try {
      const saveWishlistItem = await newWishlistItem.save();
      res.status(201).json({
         success: true,
         message: 'Added a new item to wishlist',
         wishlistItem: saveWishlistItem,
      });
   } catch (err) {
      res.json(400).json({
         success: false,
         error: 'Error adding new product to wishlist',
         errMessage: err.errMessage,
      });
   }
};

const deleteWishlistItem = async (req, res) => {
   try {
      const { id } = req.params;
      await WishlistItem.findByIdAndDelete(id);
      res.json({
         sucess: true,
         message: 'Deleted wishlist item',
      });
   } catch (err) {
      res.json({
         success: false,
         message: 'Error deleting wishlist item',
         errMessage: err.errMessage,
      });
   }
};

module.exports = { getWishlistItems, addWishlistItem, deleteWishlistItem };
