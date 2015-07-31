'use strict';

module.exports = function(newFavorite, array) {

  var j = array.indexOf(newFavorite);
  if (j > -1) {
    return {message: 'That word is already a favorite'};
  } else {
    array.push(newFavorite);
    return {message: 'Thanks! We added your word to the favorites!'};
  }
};
