$(document).ready(function () {
	
  $('body , .nav1 , .nav').hide();
	
  $('body').fadeIn(600);
  
  $('.ham-menu').on('click', function() {
    $('.nav1').slideToggle(400);
    $('.nav').slideUp(400);
  });
  
  $('.sub').on('click', function() {
    $(this).parent().parent().next().slideDown(400);
  });
  
  $('.back').on('click', function() {
    $(this).parent().parent().slideUp(400);
    $(this).parent().parent().nextAll().slideUp(400);
  });
  
});
