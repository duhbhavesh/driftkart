const express = require('express');
const {
   getWishlistItems,
   addWishlistItem,
   deleteWishlistItem,
} = require('../controllers/wishlist');
const router = express.Router();

router.route('/').get(getWishlistItems).post(addWishlistItem);

router.route('/:id').delete(deleteWishlistItem);

module.exports = router;
