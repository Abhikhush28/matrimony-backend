const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
 user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
 plan_type: String,
 start_date: Date,
 end_date: Date,
 payment_status: String
});

module.exports = mongoose.model('subscription', subscriptionSchema);