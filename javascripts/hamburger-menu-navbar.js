$(document).ready(function () {
    
    $(".navbar-toggle").click(function () {

        $("#my_navbar").fadeToggle(100);

    });

    // $(window).resize(function () {
    //     if(document.body.clientWidth <= 810){
    //         $(".in").css("display", "none")
    //     } else {
    //         $(".in").css("display", "unset")
    //     }
    // })

    $('.dropdown-toggle').on('click', function () {
        $(this).parent().parent().toggleClass('move');
        // console.log(["translate(100%, ", document.body.clientHeight - getOffset($(this)).top, "px", ")"].join(""));
        // $(".dropdown-menu").css("transform", ["translate(100%, ", document.body.clientHeight - getOffset($(".dropdown-menu")).top, "px", ")"].join(""))
    });
    
    $('.return-lvl').on('click', function () {
        $(this).parent().parent().parent().parent().removeClass('move');
        // $(".dropdown-menu").css("transform", "unset");
    });

    function getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
          left: rect.left + window.scrollX,
          top: rect.top + window.scrollY
        };
    }

});