$(document).ready(function () {

  $('.mob-menu').on('click', function () {
    $('.nav').slideToggle(400);
  });
  
  $('#webdevlink').on('click', function () {
    window.location = ('projects/webdev-portfolio.html');
  });

});
