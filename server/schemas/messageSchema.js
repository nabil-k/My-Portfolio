const mongoose = require('mongoose');

exports.message = mongoose.Schema({
    name: String,
    email:String,
    phoneNumber:String,
    date: String,
    message: String
  })

