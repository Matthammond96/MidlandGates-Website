$(document).ready(function() {
    $(".animatedScroll").click(function(){
       var linkattr = $(this).attr("data-link");
        
        $("html, body").animate({
            scrollTop: $(linkattr).position().top
        }, 500);
    });
})    

$(window).scrollTop(function() {
    var posFromTop = $(window).scrollTop() * 0.3;
    $('#topContainer').css('top', -1*posFromTop);
})