$(function () {

    $('.card-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
         appendArrows: '.card-top__arrows',
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    })

    $('.bestsellers-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
         appendArrows: '.bestsellers-top__arrows',
        dots: false,
        prevArrow: '<button type="button" class="slick-prev-bestsellers"></button>',
        nextArrow: '<button type="button" class="slick-next-bestsellers"></button>'
    });

    $('.merch-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
         appendArrows: '.merch-top__arrows',
        dots: false,
        prevArrow: '<button type="button" class="slick-prev-merch"></button>',
        nextArrow: '<button type="button" class="slick-next-merch"></button>'
    });

    $('.home-news__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
         appendArrows: '.home-news__top-arrows',
        dots: false,
        prevArrow: '<button type="button" class="slick-prev-home-news"></button>',
        nextArrow: '<button type="button" class="slick-next-home-news"></button>'
    });
});



window.addEventListener('DOMContentLoaded', () => {

const sityModal = document.querySelector('.sity-modal'),
    sityBtn = document.querySelector('.header__top-sity');

sityBtn.addEventListener('click', () => {
    sityModal.classList.toggle('show');
   
});



});