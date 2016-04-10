var main = function() {
  /* Push the body and the nav over by 265px over */
  $('#homebutton').click(function() {
    $('.menu2').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "265px"
    }, 200);
  });

  /* Then push them back */
  $('.homebutton-close').click(function() {
    $('.menu2').animate({
      left: "-265px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};


$(document).ready(main);