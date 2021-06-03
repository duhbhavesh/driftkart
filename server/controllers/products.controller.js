const { Product } = require('../models/product.model');

const getProducts = async (req, res) => {
   try {
      const products = await Product.find({});
      res.json({ success: true, products });
   } catch (err) {
      res.status(500).json({
         success: false,
         message: 'unable to get products',
         errorMessage: err.message,
      });
   }
};

module.exports = { getProducts };
