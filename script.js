$(function() {
  $('.random-button').on('click', function() {
    ranColor = 'rgb(' + (Math.floor(Math.random() * 254)) + ',' + (Math.floor(Math.random() * 254)) + ',' + (Math.floor(Math.random() * 254)) + ')';
    $('body').css('background-color', ranColor);
      });
});

$('.reset-button').on('click', function() {
  $('body').css({'background-color': 'white'});
});
