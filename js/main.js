// Toggle visibility of underscore
$.fn.visibilityToggle = function() {
  return this.css('visibility', function(i, visibility) {
    return (visibility == 'visible') ? 'hidden' : 'visible';
  });
};

var toggle_visibility = setInterval(function(){
  $("#underscore").visibilityToggle();
}, 500);
