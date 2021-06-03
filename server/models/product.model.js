const mongoose = require('mongoose');
const { Schema } = mongoose;
const productsData = require('../data/products');

const ProductSchema = new Schema({
   id: Schema.Types.ObjectId,
   name: String,
   image: String,
   price: Number,
   brand: String,
   inStock: Boolean,
   fastDelivery: Boolean,
   ratings: Number,
   quantity: Number,
});

const Product = mongoose.model('Product', ProductSchema);

const PopulateProducts = async () => {
   try {
      productsData.forEach(async (product) => {
         const newProduct = new Product(product);
         const savedProduct = await newProduct.save();
         console.log(savedProduct);
      });
   } catch (error) {
      console.log(error.message);
   }
};

module.exports = { Product, PopulateProducts };
