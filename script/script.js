$(document).ready(function () {

  $('.mob-menu').on('click', function () {
    $('.nav').slideToggle(400);
  });

  $('#webdevlink').on('click', function () {
    $(this).fadeTo(400, 0.01, function () {
      window.location = ('webdev-portfolio.html');
    });
  });

  $('#photolink').on('click', function () {
    $(this).fadeTo(400, 0.01, function () {
      window.location = ('photo-portfolio.html');
    });
  });

  $('#graphiclink').on('click', function () {
    $(this).fadeTo(400, 0.01, function () {
      window.location = ('graphic-portfolio.html');
    });
  });

});
