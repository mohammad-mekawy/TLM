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

    var wob = $(".wob");
    wob.mouseenter(function() {
        $(this).toggleClass("wobble animated")
    })
});