var randomButton = document.querySelector('.random-button');
var resetButton = document.querySelector('.reset-button');
var ranColor = colorRandom();
// var resetColor = bkgdWhite();

function colorRandom() {
  return 'rgb(' + (Math.floor(Math.random() * 254)) + ',' + (Math.floor(Math.random() * 254)) + ',' + (Math.floor(Math.random() * 254)) + ')';
}

// randomButton.addEventListener('click', function() {
//   colorRandom();
// });

$('body').on('click', function() {
  $(this).css('background-color', ranColor);
})


// $('body').on('click', '.reset' function() {
//   $(this).css('background-color', 'white');
// })
