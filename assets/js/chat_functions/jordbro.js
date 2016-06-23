var c = 0;

//INFO BUTTON
$('#send').click(function(e) {
  e.preventDefault();
  c++;
  $('.infoModal').css('display','block');
  $('.bro').css('display','none');
  if (c%2===0){
    $('.infoModal').css('display','none');
    $('.bro').css('display','initial');

  }
});


//BOT RESPONSE
$('.formInput').submit(function(e){
  e.preventDefault();

  var jordbot = {
    name: 'oh dude - my bad! forgot to tell you...the name is Bro. like BroToGo.',
    beer: 'dude, IPAs all the way. seriously, bro, hops.',
    weather: 'honestly bro, the sun all day. gotta catch all the rays man.',
    concert: 'bro, I will seriously go to any concert. we can grab some nattys and bro out on the lawn DUDE!',
    food: 'Taco Bell? I can drive...',
    wait: 'wait...no I cant :('
  };

  var query = $('input[name="name"]').val();
  var favbeer = '';
  var favweather = '';


  c++;
  if(c===1){
    setTimeout(function botreply(){
      $('#chatbox').append('<li class="bot">' + 'wuts up bro!' + '</li>');
    }, 1000);
  }
  if (query.match(/beer/g) == 'beer'){
    setTimeout(function botreply(){
      $('#chatbox').append('<li class="bot">' + jordbot.beer + '</li>');
    }, 1000);
  }
  if (query.match(/name/g) == 'name'){
    setTimeout(function botreply(){
      $('#chatbox').append('<li class="bot">' + jordbot.name + '</li>');
    }, 1000);
  }
  if (query.match(/weather/g) == 'weather'){
    setTimeout(function botreply(){
      $('#chatbox').append('<li class="bot">' + jordbot.weather + '</li>');
    }, 1000);
  }
  if (query.match(/concert/g) == 'concert'){
    setTimeout(function botreply(){
      $('#chatbox').append('<li class="bot">' + jordbot.concert + '</li>');
    }, 1000);
  }
  if (query.match(/food/g) == 'food'){
    setTimeout(function botreply(){
      $('#chatbox').append('<li class="bot">' + jordbot.food + '</li>');
    }, 1000);
    setTimeout(function botreply(){
      $('#chatbox').append('<li class="bot">' + jordbot.wait + '</li>');
    }, 3000);
  }

});
