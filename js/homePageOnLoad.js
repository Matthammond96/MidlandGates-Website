$(document).ready(function() {
    var imageSize = $('.item').height();
 
    $('#headerRow').css('padding-top', "100px");
    $(".contentContainer").css("min-height", imageSize);
    $("#homeCarousel").css("height", $(window).height());
    //$(".item").css("height", $(window).height());
})