$(document).ready(function () {

  $('body').hide();

  $('body').fadeIn(600);

  $('.mob-menu').on('click', function () {
    $('.nav').slideToggle(400);
  });

});
