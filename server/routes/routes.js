const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
var router = express.Router();
const mongoose = require('mongoose');
//Schemas
var messageSchema = require('../schemas/messageSchema');

var Message = mongoose.model('messages', messageSchema.message);

const url = 'mongodb://nabil:wade5693@ds147668.mlab.com:47668/my-portfolio';

// Mongoose Setup
mongoose.connect(url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log("Connected To Mongoose")
  
});

// Gets the messages stored
router.get('/messages', (req, res) => {
    db.collection('messages').find().toArray(function (err, result) {
        if (err) throw err;
        res.json(result)
        // console.log(result)
    });
});

// Sends new Messages to DB
router.post('/newMessages', (req, res) => {
    var newMessage = Message(req.body);
    newMessage.save()
        .then(item => {
            res.send("new messaged stored")
        })
        .catch(err => {
            res.status(400).send("unable to save message")
        })
});

module.exports = router;