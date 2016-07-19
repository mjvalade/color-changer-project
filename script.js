// var randomButton = document.querySelector('.random-button');
// var resetButton = document.querySelector('.reset-button');
var ranColor = colorRandom();
// var resetColor = bkgdWhite();

function colorRandom() {
  return 'rgb(' + (Math.floor(Math.random() * 254)) + ',' + (Math.floor(Math.random() * 254)) + ',' + (Math.floor(Math.random() * 254)) + ')';
}

$('.random-button').on('click', function() {
  $('body').css({'background-color': 'colorRandom()'});
});


// $('.list1').on('click', '.read-button', function () {
//   $(this).parents('.bookmark').toggleClass("red");
//   getTotalReadCount();
//   getTotalUnreadCount();
// });

$('.reset-button').on('click', function() {
  $('body').css({'background-color': 'white'});
});
