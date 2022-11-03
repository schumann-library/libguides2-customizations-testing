$(document).ready(function () {
    // document.getElementById("my_navbar").style.opacity = "0.0";  
    $(".navbar-toggle").click(function () {

        $(".in").fadeToggle(100);

        //toggle the button beetween relitive and fixed
        if($(".navbar-toggle").css("position") == "relative"){

            $(".navbar-toggle").css("position", "fixed");

        } else {

            $(".navbar-toggle").css("position", "relative");
            
        }

    });

    $('.menu .service-lvl a').on('click', function () {
        $(this).parent().parent().toggleClass('move');
    });
  
    $('.menu .service-lvl .sub .return-lvl a').on('click', function () {
        $(this).parent().parent().parent().parent().removeClass('move');
    });

});