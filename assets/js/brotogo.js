$(function strict(){
"use strict";
// 1) SELECT INPUT
// 2) DETERMINE TEXT INPUT
// 3) APPEND TEXT TO NEW LIST ITEM (assign appropriate class for bot and bro)

  $('.formInput').submit(function(e){
    e.preventDefault();

    var brotalk = '';
    var request = $('.userInput').val();
    console.log(request);

    if(request.length){
      $('#chatbox').append('<li class="bro">' + request + '</li>');
      $('.userInput').val("");
      setTimeout(function botreply(){
        $('#chatbox').append('<li class="bot">' + 'Im old greg' + '</li>');
      }, 1000);
    }

  });












});
