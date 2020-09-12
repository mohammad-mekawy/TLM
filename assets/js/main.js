$(document).ready(function() {

    var owl1 = $('.owl-one');
    owl1.owlCarousel({
        items: 1,
        loop: true,
        dotsEach: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 500,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });

    var owl2 = $('.owl-two');
    owl2.owlCarousel({
        items: 1,
        loop: true,
        dotsEach: false,
        smartSpeed: 700,
        nav: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });

    var owl3 = $('.owl-three');
    owl3.owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: false,
            }
        }
    });
    $('.btn-call-float').click(function(e) {
        $('.call-float-div').toggleClass('call-close');
    });

    //     $(".navbar-nav li").click(function () {
    //         $(this).addClass("active").siblings().removeClass("active")
    //     })

    //     $(window).on('scroll', function () {
    //         if ($(window).scrollTop() > 120) {
    //             $('.main-header').css({
    //                 position: "fixed",
    //                 backgroundColor: "#353030",
    //                 width: "100%",
    //                 top: -80,
    //                 boxShadow: "0 1px 3px rgba(0, 0, 0, 0.14)",
    //                 zIndex: 99999,
    //             })
    //             $('.main-header').animate({
    //                 top: 0
    //             })
    //         } else {
    //             $('.main-header').css({
    //                 position: "relative",
    //                 backgroundColor: "transparent",
    //                 boxShadow: "0 0px 0px",
    //                 zIndex: 99999,
    //             });
    //         }
    //     })

    //     if ($(window).scrollTop() > 120) {
    //         $('.main-header').css({
    //             position: "fixed",
    //             backgroundColor: "#353030",
    //             width: "100%",
    //             top: -80,
    //             boxShadow: "0 1px 3px rgba(0, 0, 0, 0.14)",
    //             zIndex: 99999,
    //         })
    //         $('.main-header').animate({
    //             top: 0
    //         })
    //     } else {
    //         $('.main-header').css({
    //             position: "relative",
    //             backgroundColor: "transparent",
    //             boxShadow: "0 0px 0px",
    //         });
    //     }

    //     var myUpButton = $("div.up");
    //     $(window).scrollTop() > 120 ? myUpButton.fadeIn() : myUpButton.fadeOut();
    //     $(window).on("scroll", function () {
    //         $(window).scrollTop() > 120 ? myUpButton.fadeIn() : myUpButton.fadeOut();
    //     });

    //     myUpButton.click(function () {
    //         $('html, body').animate({
    //             scrollTop: 0
    //         }, 1000);
    //     });

    //     $(".list-choose>li").click(function () {
    //         $(this).addClass("active").siblings().removeClass("active");
    //         $(".right-part>div").hide()
    //         $("." + $(this).data("class")).fadeIn(1000)
    //     });

    //     $(".go-up").click(function () {
    //         $("." + $(this).data("class")).animate({
    //             top: -$(".overflow").height()
    //         })
    //     })

    //     $(".go-down").click(function () {
    //         $("." + $(this).data("class")).animate({
    //             top: 0
    //         })
    //     })

    //     $(".pannel-a").on("click", function () {
    //         if ($(this).hasClass("collapsed")) {
    //             $(".pannel-a").not(this).children('.gly1').addClass("z")
    //             $(this).children('.gly1').removeClass("z")
    //         } else {
    //             $(this).children('.gly1').addClass("z")
    //         }
    //     });
    //     // $(".pannel-a").click(function () {
    //     //     if ($(this).hasClass("collapsed")) {
    //     //         $("#accordion").find(".pannel-a").children(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
    //     //         $(this).children(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
    //     //     } else {
    //     //         $(this).children(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
    //     //     }
    //     // });

    //     $(".nav .dropdown").append("<button data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false' class='pull-right visible-xs-inline-block nested-btn'><span class='sr-only'>Toggle navigation</span><span class='icon-bar'></span></span><span class='icon-bar'></span></span><span class='icon-bar'></span></button>")

    //     $(".btn-group .myBtn").click(function () {
    //         $(this).addClass("active").siblings().removeClass("active");
    //         $($(this).data("class")).siblings().not($(this).data("class")).css({
    //             animation: "rotate-2 2s"
    //         }).slideUp(2000)

    //         $($(this).data("class")).show().css({
    //             animation: "rotate-3 2s"
    //         })
    //     })

    //     $("#in-ser").focus(function () {
    //         $(this).siblings("span").css("background", "#000")
    //     })
    //     $("#in-ser").blur(function () {
    //         $(this).siblings("span").css("background", "#fdc716")
    //     })

    //     $(".zoom-in").mouseenter(function () {
    //         $(this).find(".img").animate({
    //             backgroundSize: "110%"
    //         }, 300)
    //     })

    //     $(".zoom-in").mouseleave(function () {
    //         $(this).find(".img").animate({
    //             backgroundSize: "100%"
    //         }, 300)
    //     });

    //     $(".eye").click(function () {
    //         $(".full-layer").fadeIn()
    //         $(".full-layer img").attr("src", $(this).parentsUntil(".con").find("img").attr("src"))
    //     });

    //     $(".eye2").click(function () {
    //         $(".full-layer").fadeIn()
    //         $(".full-layer img").attr("src", $(this).find("img").attr("src"))
    //     });

    //     $(".full-layer").click(function () {
    //         $(this).fadeOut()
    //     });

    //     $(".full-layer img").click(function (e) {
    //         e.stopPropagation();
    //     });

    //     $(document).keydown(function (e) {
    //         if (e.key === "Escape") {
    //             $(".full-layer").fadeOut()
    //         };
    //     });


    //     $("#choose_color").change(function () {
    //         var myColor = $("#choose_color").val()
    //         $("style").html(":root{--main-color:" + myColor + "; --lighter-color:" + myColor + "b0" + ";}")
    //         console.log($("#choose_color").val())
    //     });

    //     $(".navbar-nav .dropdown-toggle").click(function () {
    //         window.location = $(this).attr("href");
    //     });

});