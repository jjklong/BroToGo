$('.formInput').submit(function(e) {
    e.preventDefault();

    var request = $('.userInput').val(); //detects the value of the input
    var sky = '@sky';
    var latitude = "";
    var longitude = "";
    if (request.startsWith(sky) === true) {
        var city = request.replace(sky, "");

        var capCITY = city.toUpperCase();
        $('h2').html(capCITY);
        $.ajax({
            url: 'https://api.brewerydb.com/v2/locations/?locality=' + city + '&key=905415c2a8c587c6f31b9eef1f71b4c0&format=json',
            success: function brewCity(user) {
                var breweryResults = "";

                latitude = user.data[0].latitude;
                longitude = user.data[0].longitude;
                city = user.data[0].locality;
                state = user.data[0].region;
                $('#chatbox').append('<li class="bot cityST">' + city + ', ' + state + '</li>');


                $.ajax({
                    url: 'https://api.forecast.io/forecast/77f5b9251d4b7d953c5e1f816e7f027b/' + latitude + ',' + longitude,
                    success: function weather(ll) {
                        var temp = "";
                        var summary = "";
                        temp = ll.currently.temperature;
                        summary = ll.hourly.summary;
                        $('#tempF').html(Math.round(temp));
                        $('#tempIcon').css('display', 'initial');
                        $('#chatbox').append('<li class="bot weatherSum">' + summary + '</li>');

                        //detect SUN, RAIN, CLOUD, OR STORM IN THE AJAX RETURN FOR THE icon information from dark sky:
                        // if, else statement to determine icon
                        var suni = ll.minutely.icon.match(/sun/g);
                        var cleari = ll.minutely.icon.match(/clear/g);
                        var raini = ll.minutely.icon.match(/rain/g);
                        var cloudi = ll.minutely.icon.match(/cloud/g);
                        var stormi = ll.minutely.icon.match(/storm/g);
                        $('#weatherIcon').removeClass("");
                        if (suni == 'sun' || cleari == 'clear') {
                            $('#weatherIcon').addClass('fa fa-sun-o');
                        } else if (raini !== null) {
                            $('#weatherIcon').addClass('fa fa-tint');
                        } else if (cloudi !== null) {
                            $('#weatherIcon').addClass('fa fa-cloud');
                        } else if (stormi !== null) {
                            $('#weatherIcon').addClass('fa fa-bolt');
                        }
                    }
                });

            }
        });

    }
});
