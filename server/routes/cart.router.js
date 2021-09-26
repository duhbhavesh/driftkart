const express = require('express');
const {
   getUserById,
   getCartById,
   getProductById,
} = require('../controllers/params.controller');
const {
   getCartItems,
   addCartItem,
   deleteCartItem,
} = require('../controllers/cart.controller');
const router = express.Router();

router.param('userId', getUserById);
router.param('userId', getCartById);
router.param('productId', getProductById);

router.route('/:userId/cart').get(getCartItems);
router
   .route('/:userId/cart/:productId')
   .post(addCartItem)
   .delete(deleteCartItem);

module.exports = router;
