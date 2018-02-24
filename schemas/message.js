var mongoose = require('mongoose');

var messageSchema = mongoose.Schema ({
    name: String,
    date: String,
    message: String
})

module.exports = mongoose.model('Message', messageSchema)
