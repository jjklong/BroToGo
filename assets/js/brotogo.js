$(function strict(){
"use strict";
// 1) SELECT INPUT
// 2) DETERMINE TEXT INPUT
// 3) APPEND TEXT TO NEW LIST ITEM (assign appropriate class for bot and bro)
var options = {'@weather': '1) grab the "@weather"',
                '@beer': '2) grab the "@beer"'};
  $('.formInput').submit(function(e){
    e.preventDefault();

    var brotalk = '';
    var request = $('.userInput').val(); //detects the value of the input
    var help = '@help';
    console.log(request);



    if(request == help){
      console.log(options); //check to see if @help returns options
      $('#chatbox').append('<li class="bot">' + options['@weather'] + '<br>' + options['@beer'] + '</li>');
    }
    else if(request.length){
      $('#chatbox').append('<li class="bro">' + request + '</li>');
      $('.userInput').val("");
      setTimeout(function botreply(){
        $('#chatbox').append('<li class="bot">' + 'Im old greg' + '</li>');
      }, 1000);
    }

  });

  $('#question').click(function(e){
    e.preventDefault();
    $('.helpModal').css('display','flex');
  });












});
