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
const {
   handleAuthVerify,
} = require('../middlewares/handleAuthVerify.middleware');

const router = express.Router();

router.param('productId', getProductById);

router.get('/wishlist', handleAuthVerify, getWishlistById, getWishlistItems);
router.post(
   '/wishlist/:productId',
   handleAuthVerify,
   getWishlistById,
   addWishlistItem,
);
router.delete(
   '/wishlist/:productId',
   handleAuthVerify,
   getWishlistById,
   deleteWishlistItem,
);

module.exports = router;
