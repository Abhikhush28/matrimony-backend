const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: { type: String, unique: true },
  password_hash: String,
  gender: String,
  date_of_birth: Date,
  phone_number: String,
  created_at: { type: Date, default: Date.now },
  last_login: Date
});

// ✅ Virtual field for password (not saved directly)
userSchema.virtual('password')
  .set(function(password) {
    this._password = password;
    this.password_hash = bcrypt.hashSync(password, 10);
  })
  .get(function() {
    return this._password;
  });

module.exports = mongoose.model('User', userSchema);
