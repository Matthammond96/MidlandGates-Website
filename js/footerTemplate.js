$(document).ready(function(){
    
    $("body").append('<section class="footerContainer"><div class="container whiteText footerCols"><div class="col-md-8"><div class="col-md-6"><h3 style="">Products/Services</h3><div class="col-md-6"><ul><li><a href="swan-neck-gates.html">Swan Neck Gates</a></li><li><a href="bow-top-gates.html">Bow Top Gates</a></li><li><a href="open-top-gates.html">Open Top Gates</a></li></ul></div><div class="col-md-6"><ul><li><a href="wooden-driveway-gates.html">Flat Top Gates</a></li><li><a href="ironmongery.html">Ironmongery</a></li><li><a href="installation.html">Installation Service</a></li></ul></div></div><div class="col-md-6" id="footerMidCol"><h3>Mid Col Title</h3><ul><li><a href="faq.html">FAQ</a></li><li><a href="terms-and-conditions.html">Terms and Conditions</a></li><li><a href="privacy-policy.html">Privacy Policy</a></li></ul></div></div><div class="col-md-4" id="rightFooterCol"><img style="padding-top: 10px" src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png" border="0" alt="PayPal Acceptance Mark"></div></div><div class="seperator"></div><div class="container bottomFooter"><!--      <p class="lead center bold"> <a href="">Terms and Conditions</a> | <a href="">Privacy Policy</a> | <a href="">Cookie Policy</a></p>--><p>&copy; 2016 Midland Gates is a trading name of <a href="http://libertyfixings.co.uk/">Liberty Fixings LTD </a> | Co Reg: 9932822.</p></div></section>');                    
    
    //Footer Positioning
    var windowHeight = $(window).height();
    var documentHeight = $(".container").height();
    var footerHeight = $(".footerContainer").height();
    if (windowHeight - footerHeight > documentHeight){
        $(".screenSize").css("height", windowHeight - footerHeight);
    }
})

$(window).resize(function() {
    //Footer Positioning
    var windowHeight = $(window).height();
    var documentHeight = $(".container ").height();
    var footerHeight = $(".footerContainer").height();
    if (windowHeight - footerHeight > documentHeight){
        $(".screenSize").css("height", windowHeight - footerHeight);
    }
    console.log($(".screenSize").height());
})