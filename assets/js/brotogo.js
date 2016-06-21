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


//UNDER CONSTRUCTION
    if(request == help){
      console.log(options); //check to see if @help returns options
      $('#chatbox').append('<li class="bot">' + options['@weather'] + '<br>' + options['@beer'] + '</li>');
    }
    else if(request == '@foursquare' || '@weather' || '@movies'){
      $('#chatbox').append('<li class="bot">' + 'sry...this feature under construction' + '</li>');
    }
    else if(request.length){
      $('#chatbox').append('<li class="bro">' + request + '</li>');
      $('.userInput').val("");
      setTimeout(function botreply(){
        $('#chatbox').append('<li class="bot">' + 'Im old greg' + '</li>');
      }, 1000);
    }


  });

  var counter = 0;
  $('#question').click(function(e){
    counter++;
    e.preventDefault();
    $('#modal_ul').css('display','block');
    if (counter%2===0){
      $('#modal_ul').css('display','none');
    }
  });

  $('#foursquare').click(function(e){
    e.preventDefault();
    $('.userInput').val('@foursquare');
  });
  $('#beer').click(function(e){
    e.preventDefault();
    $('.userInput').val('@beer');
  });
  $('#weather').click(function(e){
    e.preventDefault();
    $('.userInput').val('@weather');
  });
  $('#concerts').click(function(e){
    e.preventDefault();
    $('.userInput').val('@concert');
  });












});
