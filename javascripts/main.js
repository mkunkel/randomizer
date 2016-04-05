$(document).ready(function() {
  showPrompt();
  $('.arrows').on('click', clickHandler);
});

var showPrompt = function() {
  $('.prompt').removeClass('hidden');
};

var clickHandler = function() {
  $('.prompt').addClass('hidden');
  $('.arrow').addClass('hidden');
  $(randomArrow()).removeClass('hidden');
};

var randomArrow = function() {
  var random = Math.floor(Math.random() * 2);
  if (random == 0) {
    return '.left-arrow';
  } else {
    return '.right-arrow';
  }
}
