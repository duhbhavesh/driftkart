const express = require('express');
const { getProducts } = require('../controllers/products');
const router = express.Router();

router.route('/').get(getProducts);

module.exports = router;
