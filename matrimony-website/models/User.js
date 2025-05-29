// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: { type: String, unique: true },
  password: { type: String, required: true }, // changed to 'pascxsword' instead of 'password_hash'
  gender: String,
  date_of_birth: Date,
  phone_number: String,
  created_at: { type: Date, default: Date.now },
  last_login: Date
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', userSchema);
