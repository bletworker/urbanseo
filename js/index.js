$(function () {

    $('.body5_main').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        // dots: true,
        adaptiveHeight: true,
        // speed: 500,
        easing: 'ease',
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        // pauseOnDotsHover: true,
        // draggable: true,
        swipe: true,
        // touchThreshold: 5,
        // touchMove: true,
        waitForAnimate: false,
        centerMode: true,
        centerPadding: '0',


        // centerMode: true,
        // centerPadding: '60px',
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    // arrows: false,
                    centerMode: false,
                    // centerPadding: '10px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    arrows: true,
                    centerMode: false,
                    // centerPadding: '40px',
                    slidesToShow: 1,
                }
            }
        ]
    })

    $('.header_menu').on('click', function(){
        $('.header_info').slideToggle();
    })
});
