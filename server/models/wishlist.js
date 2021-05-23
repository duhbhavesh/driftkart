const mongoose = require('mongoose');
const { Schema } = mongoose;

const WishlistItemSchema = new Schema({
   _id: { type: Schema.Types.ObjectId, ref: 'Product' },
});

const WishlistItem = mongoose.model('WishlistItem', WishlistItemSchema);

module.exports = { WishlistItem };
