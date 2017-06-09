$(document).ready(function () {
  //INDEX TILES//
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
      window.location = ('other-portfolio.html');
    });
  });
  
  //WEBDEV TILES//
  $('#todo').on('click', function () {
    window.open('projects/to-do-list/to-do-index.html');
  });
  
  $('#this-site').on('click', function () {
    window.open('index.html');
  });
  
  $('#jg-site').on('click', function () {
    window.open('projects/jg/index.html');
  });

});
