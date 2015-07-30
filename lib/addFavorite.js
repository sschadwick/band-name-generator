'use strict';

module.exports = function(newFavorite, Favorites) {
  Favorites.push(newFavorite);
  return {message: 'Thanks! We added your word to the favorites!'};
  //return message is not working...
  };

  //else too bad
