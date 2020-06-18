import Swiper from 'swiper';

let carousel = document.querySelector('.slider-container__service'),
    slidercarousel = new Swiper(carousel, {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        }
    })