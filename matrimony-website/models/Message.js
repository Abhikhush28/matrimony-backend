const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
 sender_id: { type: mongoose.Schema.Types.ObjectId, ref:'User'},
 receiver_id: { type: mongoose.Schema.Types.ObjectId, ref:'User'},
 message_text: String,
 sent_at: { type: Date, default: Date.now },
 is_read: { type: Boolean, default: false}

});

module.exports = mongoose.model('Message', messageSchema);