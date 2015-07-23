'use-strict';

var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

//make adj, verb and noun constructor functions
var Adjective = function() {
  this.comprehensive = true;
  this.loco = true;
  this.omnipotent = true;
  this.extraorbital = true;
  this.robust = true;
  this.heady = true;
}

var Verb = function() {
  this.damage = true;
  this.freeze = true;
  this.sublimate = true;
  this.ferment = true;
  this.launch = true;
  this.restart = true;
}

var Noun = function() {
  this.machine = true;
  this.moose = true;
  this.glass = true;
  this.pillow = true;
  this.snowcone = true;
  this.hurricane = true;
}

app.use(express.static(__dirname + '/app'));
//lets app have access to specified directory

//make an instance of that adjective object
var adjective = new Adjective();
var verb = new Verb();
var noun = new Noun();

//make word retrieval function
function getRandomWord(object) {

  //get all of those properties in an array
  var propArray = Object.keys(object);

  //pick a random word from the array
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];

  //return that word in form of an object
  return {word: randomProp};
}

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.get('/noun', function(req, res){
  res.json(getRandomWord(noun));
})

app.listen(port, function() {
  console.log('server started on port ' + port);
});
