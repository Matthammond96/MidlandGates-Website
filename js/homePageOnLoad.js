$(document).ready(function() {
    var imageSize = $('#topContainer').height();
 
    $('#headerRow').css('padding-top', imageSize * 0.5);
    $(".contentContainer").css("min-height",$(window).height())
    $("#homeCarousel").css("height", $(window).height());
    $(".item").css("height", $(window).height());
})