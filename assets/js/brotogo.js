$(function strict(){
"use strict";
// 1) SELECT INPUT
// 2) DETERMINE TEXT INPUT
// 3) APPEND TEXT TO NEW LIST ITEM (assign appropriate class for bot and bro)
var options = {'@foursquare': '@foursquare: ZIPCODE',
                '@beer': '@beer: CITY',
                '@sky': '@sky: CITY',
                '@concert': '@concert: CITY'};
  $('.formInput').submit(function(e){
    e.preventDefault();

    var brotalk = '';
    var request = $('.userInput').val(); //detects the value of the input
    var help = '@help';
    console.log(request);

//Used http://jsfiddle.net/5ucD3/461/ to help understand this animation method
    $('#chatbox').animate({scrollTop: $('#chatbox').prop("scrollHeight")}, 500);

    if(request == help){
      $('#chatbox').append('<li class="bot">' + options['@foursquare'] + '<br>' + options['@beer'] + '<br>' + options['@sky']+ '<br>' + options['@concert'] + '</li>');
    }
    else if(request.length){
      $('#chatbox').append('<li class="bro">' + request + '</li>');
      $('.userInput').val("");
      // setTimeout(function botreply(){
      //   $('#chatbox').append('<li class="bot">' + 'Im old greg' + '</li>');
      // }, 1000);
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
    $('.userInput').val('@sky');
  });
  $('#concerts').click(function(e){
    e.preventDefault();
    $('.userInput').val('@concert');
  });













});
