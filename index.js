
/* SUPER SIMPLE SLIDER */
jQuery(function ($) {
    $('.slider').sss();
});

/*
ANIMATION WOW */
new WOW().init();


/* SLIDER GLIDER */
window.addEventListener('load', function() {
    new Glider(document.querySelector('.fourSection__list'), {
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: true,
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 768,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                },
            },
        ],
    })
})