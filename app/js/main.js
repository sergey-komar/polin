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

    $('.product-upsels-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
         appendArrows: '.product-upsels__arrows',
        dots: false,
        prevArrow: '<button type="button" class="slick-prev-product-upsels"></button>',
        nextArrow: '<button type="button" class="slick-next-product-upsels"></button>'
    });

    $('.news-theme-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
         appendArrows: '.news-theme__arrows',
        dots: false,
        prevArrow: '<button type="button" class="slick-prev-news-theme"></button>',
        nextArrow: '<button type="button" class="slick-next-news-theme"></button>'
    });



    $('.home-news__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
         appendArrows: '.home-news__top-arrows',
        dots: false,
        prevArrow: '<button type="button" class="slick-prev-home-news"></button>',
        nextArrow: '<button type="button" class="slick-next-home-news"></button>'
    });

    



    $('.product-slider__thumb').slick({
        asNavFor: '.product-slider__big',
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
    });

    $('.product-slider__big').slick({
        asNavFor: '.product-slider__thumb',
        draggable: false,
        arrows: false,
        fade: true
    })
});





window.addEventListener('DOMContentLoaded', () => {

const sityModal = document.querySelector('.sity-modal'),
    sityBtn = document.querySelector('.header__top-sity');

sityBtn.addEventListener('click', () => {
    sityModal.classList.toggle('show');
   
});


//catalog
const subMenu = document.querySelector('.sub-menu'),
    headerCatalog = document.querySelector('.header__center-catalog');
 headerCatalog.addEventListener('click', () => {
    subMenu.classList.toggle('menu-catalog');
    headerCatalog.classList.toggle('catalog-menu');
 })

 //tabs
 const tabsItem = document.querySelector('.product-tabs__item'),
        tabsItenBtn = document.querySelectorAll('.product-tabs__item-btn'),
        tabsContent = document.querySelectorAll('.product-tabs__content');


function tabsHide() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });
  
 
        tabsItenBtn.forEach(btn => {
            btn.classList.remove('tabs-active');
        });
}
   

function tabsShow(i) {
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabsItenBtn[i].classList.add('tabs-active')
}

if(tabsItem && tabsItenBtn && tabsContent){
    tabsItem.addEventListener('click', (e) => {
        const target = e.target;
            if(target && target.classList.contains('product-tabs__item-btn')){
                tabsItenBtn.forEach((item, i) => {
                    if(target == item){
                        tabsHide();
                        tabsShow(i);
                    }
                })
            }
    })
}

if(tabsItem && tabsItenBtn && tabsContent){
    tabsHide();
    tabsShow(0);
}



//btn
const novelties = document.querySelector('.novelties');
const btn = document.querySelector('.btnUp');
document.addEventListener('scroll', () => {
    if(scrollY > novelties.offsetHeight){
        btn.classList.add('btnUp-visible');
    }else{
        btn.classList.remove('btnUp-visible');
    }
    
});
btn.addEventListener('click', ()=>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth' 
  
    });
  });
// const btn = document.querySelector('.btnUp');
// function up() {
//   window.addEventListener('scroll', () => {
//     if(window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
//       btn.classList.add('btnUp-visible');
//     }else{
//       btn.classList.remove('btnUp-visible');
//     }
//   })
// }
// up();


});