// $(function strict(){
//   "use strict";
  $('.formInput').submit(function(e){
    e.preventDefault();

    var brotalk = '';
    var request = $('.userInput').val(); //detects the value of the input


  //Used http://jsfiddle.net/5ucD3/461/ to help understand this animation method
    $('#chatbox').animate({scrollTop: $('#chatbox').prop("scrollHeight")}, 500);
    $('#chatbox').append('<li class="bro">' + request + '</li>');



    if(request == "who are you?".toLowerCase() ){
      setTimeout(function travBotreply(){
        $('#chatbox').append('<li class="bot">' + 'So yeah dude or dudette...I am Todd-Bot, the Bro To Go.  Your one stop shop for a good day.   ' + '</li>');
      }, 1000);
    }


     else if(request == 'what are you?'.toLowerCase()  ){
      setTimeout(function travBotreply2(){
        $('#chatbox').append('<li class="bot">' + 'I am a artifically intelligent chat bot.' + '</li>');
      }, 1000);
    }


     else if(request.match(/thirsty/g) == 'thirsty'.toLowerCase()  ){
      setTimeout(function travBotreply3(){
        $('#chatbox').append('<li class="bot">' + "I could use a cold one myself.  Type @beer into the chat box or tap the pint glass icon below along with a city name. See something you dig, tap the chat bubble and be transported away to their website.  Enjoy!"  + '</li>');
      }, 1000);
    }
    else if(request.match(/thank/g) == "thank".toLowerCase()  ){
     setTimeout(function travBotreply4(){
       $('#chatbox').append('<li class="bot">' + " No worries friend. "+ '</li>');
     }, 1000);
   }
   else if(request.match(/music/g) == "music".toLowerCase()  ){
    setTimeout(function travBotreply5(){
      $('#chatbox').append('<li class="bot">' + " Let's help you find a concert!  Tap on the music note below or enter '@concert' followed by your zip code.  When you've found the show you wanna check out, just tap or click the event and get some tickets! "+ '</li>');
    }, 1000);
  }

  else if(request.match(/hello/g) == "hello".toLowerCase()  ){
   setTimeout(function travBotreply6(){
     $('#chatbox').append('<li class="bot">' + " Sup, what can I do for you compadre? "+ '</li>');
   }, 1000);
 }

 else if(request.match(/create/g) == "create".toLowerCase()  ){
  setTimeout(function travBotreply3(){
    $('#chatbox').append('<li class="bot">' + " My two bros Jordan and Travis turned me into the awesome BRObot you see before you today.    "+ '</li>');
  }, 1000);
}

    $('.userInput').val("");

  // });








});
