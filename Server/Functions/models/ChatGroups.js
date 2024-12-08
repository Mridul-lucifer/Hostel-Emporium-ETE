const mongoose = require('mongoose');

const chatGroupSchema = new mongoose.Schema({
    Chats: [{
        sender: String,
        message: String,
        timestamp: Date
    }]
});

module.exports = mongoose.model('ChatGroup', chatGroupSchema);
