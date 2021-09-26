const { Product } = require('../models/product.model');

const getProducts = async (req, res) => {
   try {
      const products = await Product.find({});
      res.json({ success: true, products });
   } catch (error) {
      res.status(500).json({
         success: false,
         message: 'unable to get products',
         errorMessage: error.message,
      });
   }
};

module.exports = { getProducts };
