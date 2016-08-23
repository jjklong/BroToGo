$(function strict() {
    "use strict";
    // 1) SELECT INPUT
    // 2) DETERMINE TEXT INPUT
    // 3) APPEND TEXT TO NEW LIST ITEM (assign appropriate class for bot and bro)
    var options = {
        '@foursquare': '@foursquare: CITY,ST + ANYTHING',
        '@beer': '@beer: CITY',
        '@sky': '@sky: CITY',
        '@concert': '@concert: ZIPCODE'
    };
    $('.formInput').submit(function(e) {
        e.preventDefault();

        var brotalk = '';
        var request = $('.userInput').val(); //detects the value of the input
        var help = '@help';

        //Used http://jsfiddle.net/5ucD3/461/ to help understand this animation method
        $('#chatbox').animate({
            scrollTop: $('#chatbox').height()
        }, 500);
        // $('#chatbox').append('<li class="bro">' + request + '</li>');
        $('.userInput').val("");

        if (request == help) {
            $('#chatbox').append('<li class="bot">' + options['@foursquare'] + '<br>' + options['@beer'] + '<br>' + options['@sky'] + '<br>' + options['@concert'] + '</li>');
        }
    });

    var counter = 0;
    $('#question').click(function(e) {
        counter++;
        e.preventDefault();
        $('#modal_ul').css('display', 'block');
        if (counter % 2 === 0) {
            $('#modal_ul').css('display', 'none');
        }
    });

    $('#foursquare').click(function(e) {
        e.preventDefault();
        $('.userInput').val('@foursquare');
    });
    $('#beer').click(function(e) {
        e.preventDefault();
        $('.userInput').val('@beer');
    });
    $('#weather').click(function(e) {
        e.preventDefault();
        $('.userInput').val('@sky');
    });
    $('#concerts').click(function(e) {
        e.preventDefault();
        $('.userInput').val('@concert');
    });
});
