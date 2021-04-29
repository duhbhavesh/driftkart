const mongoose = require('mongoose');
const { Schema } = mongoose;

const CartItemSchema = new Schema({
   _id: { type: Schema.Types.ObjectId, ref: 'Product' },
   quantity: Number,
});

const CartItem = mongoose.model('CartItem', CartItemSchema);

module.exports = { CartItem };
