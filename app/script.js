'use-strict'

$(function() {

  $("#name").click(function() {
    $.get("adjective", function(response) {

      console.log(response);

      var adjective = response.word;
      $("#adjective").text(adjective);
    });

  });

});


// CODE USED ON QUIZ:
// $(document).ready(function() {
//   $(":button").click(function() {
//     var randomStrings = ['a burrito', 'pizza', 'tacos', 'sandwich', 'pop tarts', 'ice cream'];
//     var chosenString;
//     chosenString = randomStrings[Math.floor((Math.random()) * randomStrings.length)];
//     $('div').append(chosenString + ' or how about.. ');
//   });
// });
