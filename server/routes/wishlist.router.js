const express = require('express');
const {
   getUserById,
   getWishlistById,
   getProductById,
} = require('../controllers/params.controller');
const {
   getWishlistItems,
   addWishlistItem,
   deleteWishlistItem,
} = require('../controllers/wishlist.controller');
const router = express.Router();

router.param('userId', getUserById);
router.param('userId', getWishlistById);
router.param('productId', getProductById);

router.route('/:userId/wishlist').get(getWishlistItems);
router
   .route('/:userId/wishlist/:productId')
   .post(addWishlistItem)
   .delete(deleteWishlistItem);

module.exports = router;
