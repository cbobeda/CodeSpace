var profils = new Swiper(".slide-profils", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    canterSlide: 'true',
    fade: 'true',
    gargCursor: 'true',
    pagination: {
      el: ".swiper-pagination-profils",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next.profils",
      prevEl: ".swiper-button-prev.profils",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    }
});

var projets = new Swiper(".slide-projets", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    canterSlide: 'true',
    fade: 'true',
    gargCursor: 'true',
    pagination: {
      el: ".swiper-pagination-projets",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next.projets",
      prevEl: ".swiper-button-prev.projets",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        },
    }
});