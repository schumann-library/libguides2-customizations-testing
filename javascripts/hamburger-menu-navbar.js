$(document).ready(function () {
    
    $(".navbar-toggle").click(function () {

        $(".in").fadeToggle(100);

    });

    // $(window).resize(function () {
    //     if(document.body.clientWidth <= 810){
    //         $(".in").css("display", "none")
    //     } else {
    //         $(".in").css("display", "unset")
    //     }
    // })

    $('.menu .service-lvl a').on('click', function () {
        $(this).parent().parent().toggleClass('move');
    });
  
    $('.menu .service-lvl .sub .return-lvl a').on('click', function () {
        $(this).parent().parent().parent().parent().removeClass('move');
    });

});