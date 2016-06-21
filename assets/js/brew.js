$('.formInput').submit(function(e){
  e.preventDefault();

  var request = $('.userInput').val(); //detects the value of the input
  var beer = '@beer';
  console.log(request);

  if (request.startsWith(beer)===true){
    var city = request.replace(beer,"");
    console.log(city);

    $.ajax({
      url: 'https://api.brewerydb.com/v2/locations/?locality=' + city + '&key=905415c2a8c587c6f31b9eef1f71b4c0&format=json',
      success: function brewCity(user){
        var breweryResults = "";
        console.log(user);
        for (b=0;b<=5;b++){
          breweryResults = user.data[b].brewery.name;
          console.log(breweryResults);
          $('#chatbox').append('<li class="bot">' + breweryResults + '</li>');
        }
      }
    });
  }
});
