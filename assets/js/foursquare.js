$('.formInput').submit(function (e){
  e.preventDefault();
var query = $('input[name="name"]').val();
var foursquare = '@foursquare';
console.log(query);
if(query.startsWith(foursquare)===true){
var food = query.replace(foursquare,"");

console.log(food);

  $.ajax({
    url: 'https://api.foursquare.com/v2/venues/search?client_id=XQHMSQWC4DRADZCVUDZMHSL0O4K4OZ2JYSZYSALZMDPQIKFF&client_secret=2RKEMUUKYNDCPMUUQWRDZZLGLMVWY23NPHCGYSUGQIM4C1M1&v=20130815&ll=35.9940,-78.8986&query= ' + food,

  // context: document.body
}).success(function foodz(x) {
  var foodzResults = "";
  console.log(x);
for (b=0; b<5; b++){
foodzResults = x.response.venues[b].name;
    $('#chatbox').append('<li class="bot">' + foodzResults  + '</li>');
    console.log(foodzResults);


  // else if(request.length){
  //   $('#chatbox').append('<li class="bro">' + request + '</li>');
  //   $('.userInput').val("");
}
  });

}
});
