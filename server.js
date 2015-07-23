'use-strict';

var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

//make adj constructor function
var Adjective = function() {
  this.comprehensive = true;
  this.loco = true;
  this.omnipotent = true;
  this.extraorbital = true;
  this.robust = true;
  this.heady = true;

}

app.use(express.static(__dirname + '/app'));


//make an instance of that adjective object
var adjective = new Adjective();

//make word retrieval function
function getRandomWord(object) {
  //get all of those properties (into an array
  var propArray = Object.keys(object);
  //pick a random word from the array
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  //return that word in an object
  return {word: randomProp};
}


app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
})

app.listen(port, function() {
  console.log('server started on port ' + port);
});
