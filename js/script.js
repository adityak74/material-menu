/*  jQuery ready function. Specify a function to execute when the DOM is fully loaded.  */
$(document).ready(
  /* This is the function that will get executed after the DOM is fully loaded */
  function () {
    /* Next part of code handles hovering effect and submenu appearing */
    $('.nav li').hover(
      function () { //appearing on hover
        $('ul', this).fadeIn();
      },
      function () { //disappearing on hover
        $('ul', this).fadeOut();
      }
    );

  }

);

$(function() {
options = {
 elements :'.btn',
 focus :'.btn',
 focusTimeOut: 600
};
rippleEffect = new $.RippleEffect(options);
});

function setMenuColor(){
  var e = document.getElementById('dropdown-select');
  var strUser = e.options[e.selectedIndex].value;
  var elems = document.querySelectorAll('.nav li a');
  for (var i=0; i<elems.length; i++) {
        elems[i].style.background = e.value;
      }
  e.onchange = function(){
      for (var i=0; i<elems.length; i++) {
        elems[i].style.background = e.value;
      }
  }
}