$(window).on('load', function()  {
    var screenWidth = $(window).width();
    
    if (screenWidth > 700) {
        $("#topContainer").css("position", "fixed");
        $("#wrappingContent").css("position", "absolute");
        $(".footerContainer").css("position", "absolute");
        var contentPosition = $("#wrappingContent").position().top;
        var Contentheight = $("#wrappingContent").height();
        var navPositioning = contentPosition + Contentheight;
        var navHeight = $(".footerContainer").height();
        console.log(navHeight);
        console.log();
        $(".footerContainer").css("top", navPositioning);
        $("html, body").css("height", navPositioning + navHeight);
    }
})

$(document).resize(function() {
  
    if ($(window).width() > 700) {
        $("#topContainer").css("position", "fixed");
        $("#wrappingContent").css("position", "absolute");
        $(".footerContainer").css("position", "absolute");
        var contentPosition = $("#wrappingContent").position().top;
        var Contentheight = $("#wrappingContent").height();
        var navPositioning = contentPosition + Contentheight;
        var navHeight = $(".footerContainer").height();
        console.log("TOO SMALL");
        $(".footerContainer").css("top", navPositioning);
        $("html, body").css("height", navPositioning + navHeight);
    }
})