$('.formInput').submit(function(e) {
    e.preventDefault();
    var query = $('input[name="name"]').val();
    var concert = '@concert';
    if (query.startsWith(concert) === true) {
        var show = query.replace(concert, "");


        $.ajax({
            url: 'http://api.jambase.com/events?zipCode=' + show + '&radius=30&page=0&api_key=jwg298emte4ka8ys45w4vye4',
        }).success(function music(i) {
            for (b = 0; b < 5; b++) {
                showResults = i.Events[b].Venue.Name;
                showArtists = i.Events[b].Artists[0].Name;
                showDate = i.Events[b].Date;
                showAddress = i.Events[b].Venue.Address;
                showCity = i.Events[b].Venue.City;
                showUrl = i.Events[b].TicketUrl;
                $('#chatbox').append('<li class="jamBot bot"> <a href="' + showUrl + '">' + showResults + ('<br/>') + showArtists + ('<br/>') + showDate + ('<br/>') + showAddress + ('&nbsp') + showCity + '</li>');

            }
        });
    }
});
