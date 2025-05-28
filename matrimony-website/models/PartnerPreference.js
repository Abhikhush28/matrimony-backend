const mongoose = require('mongoose');

const preferenceSchema = new mongoose.Schema({
 user_id: { type: mongoose.Schema.Types.ObjectId, ref:'User'},
 age_range_min: Number,
 age_range_max: Number,
 height_range_min: Number,
 height_range_max: Number,
 religion: String,
 caste: String,
 occupation: String,
 country: String,
 state: String

});

module.exports = mongoose.model('PartnerPreference', preferenceSchema)