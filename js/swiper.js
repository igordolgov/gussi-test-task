const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 5000,
    },
    loop: true,
    effect: "fade",
    autoHeight: true,

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});