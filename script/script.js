$(document).ready(function () {

  $('body , .nav').hide();

  $('body').fadeIn(600);

  $('.ham-menu').on('click', function () {
    $('.nav').slideToggle(400);
  });

  /*$('.ham-menu').each(function() {

    if($(this).css('display') == 'none'){
    $('.nav').show();
    };
  });*/

});

