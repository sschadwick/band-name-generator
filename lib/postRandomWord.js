'use strict';

//make word retrieval function
module.exports = function(word, wordObject) {

  // check if the word is on the object
  if (!wordObject.hasOwnProperty(word)) {

    // if it's not on the object, add it and send a message that we added it
    wordObject[word] = true;
    return {message: 'Thanks! We added the word ' + word + ' to our list.'};
  }

  // if it is on object, send a polite message saying we already have it
  return {message: 'We already have the word ' + word + ' in our list. Please try again.'};

  // those messages will be the return value of this function
};
