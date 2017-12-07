$(document).ready(function () {

    $('.navigation li a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 106
        }, 1200);
        if ($(window).width() < 1024) {
            $('.navigation').toggleClass('mobileNavigation');
            $('.mobileOnly').toggleClass('show');

        }
        event.preventDefault();
        return false;
    });

    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= 80) {
            $('.primary').addClass('header-fixed', 600);
        }
        else {
            $('.primary').removeClass('header-fixed', 600);
        }
    });

    $('.fa-bars').click(function () {
        event.preventDefault();
        $('.navigation').toggleClass('mobileNavigation', 600);
    });
});