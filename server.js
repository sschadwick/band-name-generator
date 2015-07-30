'use strict';

var express = require('express');
var bodyparser = require('body-parser');

var Adjective = require('./lib/adjective.js');
var Verb = require('./lib/verb.js');
var Noun = require('./lib/noun.js');
var getRandomWord = require('./lib/getRandomWord.js');
var postRandomWord = require('./lib/postRandomWord.js');
var Favorites = require('./lib/favorites.js');
var addFavorite = require('./lib/addFavorite.js');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true})); //just a necessary thing
app.use(express.static(__dirname + '/app/')); //lets app have access to specified directory

//make an instance of that adjective object
var adjective = new Adjective();
var verb = new Verb();
var noun = new Noun();

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/favorite', function(req, res) {
  res.json(Favorites); //take preset favs from Favorites.js
});

app.post('/favorite', function(req, res) {
  res.json(addFavorite(req.body.word, Favorites));
});

app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.post('/adjective', function(req, res) {
  res.json(postRandomWord(req.body.word, adjective)); //jsonify and send back
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.post('/verb', function(req, res) {
  res.json(postRandomWord(req.body.word, verb));
});

app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

app.post('/noun', function(req, res) {
  res.json(postRandomWord(req.body.word, noun));
});

app.listen(port, function() {
  console.log('server started on port ' + port);
});
