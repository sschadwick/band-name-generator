'use strict';

module.exports = function(newFavorite, Favorites) {
  Favorites.push(newFavorite);

  //return message is not working...
  return {message: 'Thanks! We added your word to the favorites!'};
};
