$(document).ready(function() {
    var imageSize = $('#myCarousel').height();
    console.log(imageSize * 0.2);
 
    $('#headerRow').css('padding-top', imageSize * 0.2);
    $(".contentContainer").css("min-height", imageSize);
    $("#homeCarousel").css("height", $(window).height());
    //$(".item").css("height", $(window).height());
})

$(window).resize(function() {
    var newSizing = $('#myCarousel').height();
    console.log('new height: ' + newSizing);
    
    $(".contentContainer").css("min-height", newSizing);
    
    if ($(window).width() >= 1000) {
        $('#headerRow').css('padding-top', newSizing * 0.2);
        $(".contentContainer").css("min-height", newSizing);
    } else {
        $('#headerRow').css('padding-top', newSizing * 0.05);
    }
})