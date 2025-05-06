$(document).ready(function () {
    setInterval(function () {
        $('#slideshow img:first-child').fadeOut(1000)
            .next('img').fadeIn(1000)
            .end().appendTo('#slideshow');
    }, 3000);
});