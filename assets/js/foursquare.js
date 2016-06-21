$('.formInput').submit(function(e){
  e.preventDefault();


$(function() {
  $.ajax({
    url: 'https://api.foursquare.com/v2/venues/search?client_id=XQHMSQWC4DRADZCVUDZMHSL0O4K4OZ2JYSZYSALZMDPQIKFF&client_secret=2RKEMUUKYNDCPMUUQWRDZZLGLMVWY23NPHCGYSUGQIM4C1M1&v=20130815&ll=35.9940,-78.8986&query= ' + $('input[name="name"]').val(),
    data: {

    },
  context: document.body
}).success(function(x) {
  console.log(x);
  // $( this ).addClass( "done" );
});
});
});
