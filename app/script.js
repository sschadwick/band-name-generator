'use-strict'

$(document).ready(function() {

  $("#name").click(function() {
    $.get("adjective", function(response) {
      var adjective = response.word;
      $('#adjective').text(adjective);
    });
    $.get("verb", function(response) {
      var verb = response.word;
      $('#verb').text(verb);
    });
    $.get("noun", function(response) {
      var noun = response.word;
      $('#noun').text(noun);
    });
  });
  //make an event handler that, when the button is clicked,
  //sends a POST request to the server
  $('#submitWords').on('submit', function(e) { //e is event
    e.preventDefault(); //prevent page from reloading on submit

    // get the text entered in the text box and save to a variable
    var adjective = $('input[name=adjective]').val();
    var adjectivePost;

    if(adjective) {
      adjectivePost = {word: adjective}; //object to JSON to send to backend
      $.post('adjective', adjectivePost, function(response) { //POST request to server
        var adjectiveRes = response.message;
        $('#adjectiveRes').text(adjectiveRes); //update html with response
      });
    }
  });
});
