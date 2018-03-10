const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
var request = require('request');
var router = express.Router();
const mongoose = require('mongoose');
//Schemas
var messageSchema = require('../schemas/messageSchema');

var Message = mongoose.model('messages', messageSchema.message);

const dbUrl = 'mongodb://nabil:wade5693@ds147668.mlab.com:47668/my-portfolio';
const riotUrl = 'https://na1.api.riotgames.com'
var masteryUrl = riotUrl + '/lol/champion-mastery/v3/champion-masteries/by-summoner/80360570/by-champion/103?api_key=RGAPI-b6110778-8814-4345-beb9-c99f125fb0c0';

// Mongoose Setup
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log("Connected To Mongoose")
  
});

router.get('')

// Gets the messages stored
router.get('/messages', (req, res) => {
    db.collection('messages').find().toArray(function (err, result) {
        if (err) throw err;
        res.json(result)
        // console.log(result)
    });
});

router.get('/LoLMastery', (req,res)=>{
    request.get({ url: masteryUrl },   function(error, response, body) {
        if (!error && response.statusCode == 200) { 
            res.send(body); 
           }  
    })
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