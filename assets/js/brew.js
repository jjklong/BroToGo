$('.formInput').submit(function(e){
  e.preventDefault();

  var request = $('.userInput').val(); //detects the value of the input
  var beer = '@beer';
  var latitude = "";
  var longitude = "";
  console.log(request);
  if (request.startsWith(beer)===true){
    var city = request.replace(beer,"");
    console.log(city);

    var capCITY = city.toUpperCase();
    $('h2').html(capCITY);
    $.ajax({
      url: 'https://api.brewerydb.com/v2/locations/?locality=' + city + '&key=905415c2a8c587c6f31b9eef1f71b4c0&format=json',
      success: function brewCity(user){
        var breweryResults = "";
        var breweryAddress = "";
        var brewIcon = "";
        var brewUrl = "";


        latitude = user.data[0].latitude;
        longitude = user.data[0].longitude;
        console.log(latitude);
        console.log(longitude);

        console.log(user);
        for (b=0;b<=5;b++){
          breweryResults = user.data[b].brewery.name;
          breweryAddress = user.data[b].streetAddress;
          brewIcon = user.data[b].brewery.images.icon;
          brewUrl = user.data[b].brewery.website;
          console.log(breweryResults);
          $('#chatbox').append('<li class="bot cityST">' + breweryResults + '</li>');
          $('#chatbox').append('<li class="bot weatherSum">' + breweryAddress + '</li>');
          $('#chatbox').append('<li class="bot weatherSum">' + '<a href="'+brewUrl+'">' + '<img src="'+ brewIcon + '" alt="" />'  + '</a>' + '</li>');
        }

        $.ajax({
          url: 'https://api.forecast.io/forecast/77f5b9251d4b7d953c5e1f816e7f027b/' + latitude + ',' + longitude,
          success: function weather(ll){
            var temp = "";
            var summary = "";
            temp=ll.currently.temperature;
            summary=ll.hourly.summary;
            $('#tempF').html(Math.round(temp));
            $('#tempIcon').css('display','initial');

//detect SUN, RAIN, CLOUD, OR STORM IN THE AJAX RETURN FOR THE icon information from dark sky:
// if, else statement to determine icon
            var suni = ll.minutely.icon.match(/sun/g);
            var cleari = ll.minutely.icon.match(/clear/g);
            var raini = ll.minutely.icon.match(/rain/g);
            var cloudi = ll.minutely.icon.match(/cloud/g);
            var stormi = ll.minutely.icon.match(/storm/g);
            $('#weatherIcon').removeClass("");
            if (suni=='sun'||cleari=='clear'){
              $('#weatherIcon').addClass('fa fa-sun-o');
            } else if (raini!==null){
              $('#weatherIcon').addClass('fa fa-tint');
            } else if (cloudi!==null){
              $('#weatherIcon').addClass('fa fa-cloud');
            } else if (stormi!==null){
              $('#weatherIcon').addClass('fa fa-bolt');
            }
          }
        });

      }
    });

  }
});
