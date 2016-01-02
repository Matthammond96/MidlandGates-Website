$(document).ready(function() {
  
    var contentPosition = $("#wrappingContent").position().top;
    var Contentheight = $("#wrappingContent").height();
    var navPositioning = contentPosition + Contentheight;
    var navHeight = $(".footerContainer").height();
    
    $(".footerContainer").css("top", navPositioning);
    $("html, body").css("height", navPositioning + navHeight);
    
})