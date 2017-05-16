$( document ).ready(function() {

    var $bod = $("body");
    var $a = $("a");

    $bod.hide();

    $bod.fadeIn(600);

    $a.mouseenter(function() {
        $(this).fadeTo("600", 1);
    });

    $a.mouseleave(function() {
        $(this).fadeTo("400", 0.8);
    });

    $(".disable").click(function() {
        return false;
    });

});