const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
   firstName: {
      type: String,
      trim: true,
   },
   lastName: {
      type: String,
      trim: true,
   },
   email: {
      type: String,
      unique: true,
      trim: true,
      required: true,
   },
   password: {
      type: String,
      trim: true,
      required: true,
   },
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };
