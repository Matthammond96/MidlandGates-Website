$(document).ready(function() {
    var imageSize = $('#topContainer').height();
 
    $('#headerRow').css('margin-top', imageSize * 0.5);
    $(".contentContainer").css("min-height",$(window).height())
})