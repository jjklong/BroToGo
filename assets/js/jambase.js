$('.formInput').submit(function(e){
  e.preventDefault();


$(function() {
  $.ajax({
    data: {

    },
    url: 'http://api.jambase.com/events?zipCode=' + $('input[name="name"]').val() + '&radius=30&page=0&api_key=jwg298emte4ka8ys45w4vye4',
  context: document.body
}).success(function(i) {
  console.log(i);
  // $( this ).addClass( "done" );
});
});
});
