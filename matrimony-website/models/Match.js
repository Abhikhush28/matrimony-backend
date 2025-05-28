const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
 user_id_1: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
 user_id_2: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
 match_score: Number,
 match_on: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Match', matchSchema)