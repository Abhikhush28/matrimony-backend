const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 first_name: String,
 last_name: String,
 email: { type: String, unique: true },
 password_hash: String,
 gender: String,
 date_of_birth: Date,
 phone_number: String,
 created_at: {type: Date, default: Date.now },
 last_login: Date

});

module.exports = mongoose.model('User', userSchema)