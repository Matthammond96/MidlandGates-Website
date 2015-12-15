$(document).ready(function() {
    var imageSize = $('#myCarousel').height();
    console.log(imageSize * 0.2);
 
    $('#headerRow').css('padding-top', imageSize * 0.2);
    $('.dropdown-toggle').dropdown();
    
    if ($(".caroIMG").height() >= $(window).height()) {
        $(".item").css("height", $(window).height());
    }
    
    var sliderSize = $('.item').height();
    $(".carousel-indicators").css("top", sliderSize - 50);
    
})

$(window).resize(function() {
    var newSizing = $('.item').height();
    var screenSzie = $(window).width();
    
    $(".carousel-indicators").css("top", newSizing - 50);
    $(".item").css("height", "");
    
    if (screenSzie >= 1250) {
        $('#headerRow').css('padding-top', newSizing * 0.2);
    } else if (screenSzie <= 1350 && screenSzie >= 1150) {
        $('#headerRow').css('padding-top', newSizing * 0.1);
    } else if (screenSzie <=1150 && screenSzie >= 500) {
        $('#headerRow').css('padding-top', newSizing * 0.05);
    } else if (screenSzie <= 500 && screenSzie >= 0) {
        $('#headerRow').css('padding-top', newSizing * 0.01);
        console.log("Less than 500");
    }
})