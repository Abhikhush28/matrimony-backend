const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
 user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
 photo_url: String,
 is_profile_picture: { type: Boolean, default: false},
 uploaded_at: { type: Date, default: Date.now}
});

module.exports = mongoose.model('Photo', photoSchema);