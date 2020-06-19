$(document).ready(function() {

    var slidelenght = $(".set-imggg").length;
    var slidewidth = $(".set-imggg").width();
    var slideheigh = $(".set-imggg").height();

    var setsliderwidth = slidelenght * slidewidth;

    $(".slider").css({
        width: slidewidth,
        height: slideheigh
    });
    $(".set-slider").css({
        width: setsliderwidth,
        marginLeft: -slidewidth

    });
    $("img.set-imggg:last-child").prependTo(".set-slider");

    function nextt() {
        $(".set-slider").animate({
            left: +slidewidth
        }, 300, function() {
            $("img.set-imggg:last-child").prependTo(".set-slider");
            $(".set-slider").css('left', '0');
        });
    }

    function prevv() {
        $(".slider .set-slider").animate({
            left: -slidewidth
        }, 500, function() {
            $("img.set-imggg:first-child").appendTo(".slider .set-slider");
            $(".set-slider").css('left', '0');
        });
    }
    $("a.prev").click(function() {
        prevv();

    });
    $("a.next").click(function() {
        nextt();
    });
});