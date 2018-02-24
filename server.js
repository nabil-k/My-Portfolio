const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const mongoose = require('mongoose');
// const message =  require('./schemas/message').model('Message').schema

const url = 'mongodb://localhost:27017/mean';

// Schemas
var messageSchema = mongoose.Schema({
  name: String,
  date: String,
  message: String
})

var Message = mongoose.model('messages', messageSchema)

// Mongoose Setup
mongoose.connect(url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', function () {
  console.log("Connected To Mongoose")
  var newMsg = new Message({ name: 'Sam', date: '2-23-18', message: 'Hey guys :)' })

  // newMsg.save(function (err, newMsg) {
  //   if (err) return console.log(err)
  // });
});

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Send all other requests to the Angular app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/messages', (req, res) => {
  db.collection('messages').find().toArray(function(err,result){
    if (err) throw err;
    res.json(result)
    console.log(result)
  });
});



//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));