$('.formInput').submit(function(e) {
    e.preventDefault();
    var query = $('input[name="name"]').val();
    var foursquare = '@foursquare';
    if (query.startsWith(foursquare) === true) {
        var info = query.replace(foursquare, "");
        var split = info.split(" ");


        $.ajax({
            url: 'https://api.foursquare.com/v2/venues/search?client_id=XQHMSQWC4DRADZCVUDZMHSL0O4K4OZ2JYSZYSALZMDPQIKFF&client_secret=2RKEMUUKYNDCPMUUQWRDZZLGLMVWY23NPHCGYSUGQIM4C1M1&v=20130815&near=' + split[1] + '&query= ' + split[2]
        }).success(function foodz(x) {
            var foodzResults = "";
            var foodzPhone = "";
            var foodzAddress = "";

            for (b = 0; b < 5; b++) {
                foodzResults = x.response.venues[b].name;
                foodzPhone = x.response.venues[b].contact.formattedPhone;
                foodzAddress = x.response.venues[b].location.address;
                foodzCity = x.response.venues[b].location.city;
                foodzPostal = x.response.venues[b].location.postalCode;
                foodzUrl = x.response.venues[b].url;
                $('#chatbox').append('<li class="bot"> <a href="' + foodzUrl + '">' + foodzResults + ('<br/>') + foodzPhone + ('<br/>') + foodzAddress + ('<br/>') + foodzCity + ('&nbsp') + foodzPostal + '</li>');
            }
        });

    }
});
