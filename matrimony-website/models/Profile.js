const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bio: { type: String },
  height: { type: Number },
  weight: { type: Number },
  religion: { type: String },
  caste: { type: String },
  mother_tongue: { type: String },
  education: { type: String },
  occupation: { type: String },
  income: { type: String },
  marital_status: { type: String }, // ✅ spelling fixed
  children: { type: Number },
  country: { type: String },
  state: { type: String },
  city: { type: String },
  profile_picture_url: { type: String }
}, { timestamps: true }); // ✅ adds createdAt and updatedAt automatically

module.exports = mongoose.model('Profile', profileSchema);
