const express = require('express');
const {
   getCartItems,
   addCartItem,
   deleteCartItem,
} = require('../controllers/cart');
const router = express.Router();

router.route('/').get(getCartItems).post(addCartItem);

router.route('/:id').delete(deleteCartItem);

module.exports = router;
