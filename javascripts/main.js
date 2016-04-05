$(document).ready(function() {
  showPrompt();
  $('.arrows').on('click', clickHandler);
});

var showPrompt = function() {
  $('.prompt').css('opacity', 1);
};

var clickHandler = function() {
  $('.prompt').animate({opacity: 0}, 400);
  $('.arrow').animate({opacity: 0}, 400);
  $(randomArrow()).animate({opacity: 1}, 400);
};

var randomArrow = function() {
  var random = Math.floor(Math.random() * 2);
  if (random == 0) {
    return '.left-arrow';
  } else {
    return '.right-arrow';
  }
}
