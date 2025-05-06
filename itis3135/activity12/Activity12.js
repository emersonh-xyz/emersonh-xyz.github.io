$(document).ready(function () {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        randomStart: true,
        captions: true,
        pager: true,
        controls: false,
        pause: 3000,
        slideMargin: 0,
        adaptiveHeight: true,
        speed: 1000,
        pagerCustom: '#pager'
    });
});