const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  bio: String,
  height: Number,
  weight: Number,
  religion: String,
  caste: String,
  mother_tongue: String,
  education: String,
  occupation: String,
  income: String,
  martial_status: String,
  children: Number,
  country: String,
  state: String,
  city: String,
  profile_picture_url: String


});

module.exports = mongoose.model('Profile', profileSchema)