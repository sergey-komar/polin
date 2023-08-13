$(function () {

    $('.header-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: '.header-slider__arrows',
        dots: false,
        prevArrow: '<button type="button" class="slick-prev-header-arrows"></button>',
        nextArrow: '<button type="button" class="slick-next-header-arrows"></button>',
        responsive: [
            {
              breakpoint:950,
              settings: {
                arrows: false,
                dots: true
              }
            },
          ]
    })


    $('.card-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
         appendArrows: '.card-top__arrows',
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
              breakpoint:1150,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint:800,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint:600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint:450,
                settings: {
                  slidesToShow: 1.5,
                  slidesToScroll: 1,
                  infinite: false,
                  arrows: false
                }
              },
          ]
    })

    $('.bestsellers-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
         appendArrows: '.bestsellers-top__arrows',
        dots: false,
        prevArrow: '<button type="button" class="slick-prev-bestsellers"></button>',
        nextArrow: '<button type="button" class="slick-next-bestsellers"></button>',
        responsive: [
            {
              breakpoint:1150,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint:800,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint:600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint:450,
                settings: {
                  slidesToShow: 1.5,
                  slidesToScroll: 1,
                  infinite: false,
                  arrows: false
                }
              },
          ]
    });

    $('.merch-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
         appendArrows: '.merch-top__arrows',
        dots: false,
        prevArrow: '<button type="button" class="slick-prev-merch"></button>',
        nextArrow: '<button type="button" class="slick-next-merch"></button>',
        responsive: [
          {
            breakpoint:1150,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
              breakpoint:800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint:600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint:450,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                infinite: false,
                arrows: false
              }
            },
        ]
    });

    $('.product-upsels-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
         appendArrows: '.product-upsels__arrows',
        dots: false,
        prevArrow: '<button type="button" class="slick-prev-product-upsels"></button>',
        nextArrow: '<button type="button" class="slick-next-product-upsels"></button>',
        responsive: [
          {
            breakpoint:1150,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
              breakpoint:800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint:600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint:450,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                infinite: false,
                arrows: false
              }
            },
        ]
    });

    $('.news-theme-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
         appendArrows: '.news-theme__arrows',
        dots: false,
        prevArrow: '<button type="button" class="slick-prev-news-theme"></button>',
        nextArrow: '<button type="button" class="slick-next-news-theme"></button>',
        responsive: [
          {
            breakpoint:1150,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
              breakpoint:800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint:600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint:450,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                infinite: false,
                arrows: false
              }
            },
        ]
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
        fade: true,
        dots: true
   })



    $('.qty-btn').on('click', function (e) {
        e.preventDefault();
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
                var newVal = parseFloat(oldValue) + 1;
        } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                        var newVal = parseFloat(oldValue) - 1;
                } else {
                        newVal = 0;
                }
        }
        $button.parent().find('input').val(newVal);
});
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

if(document && novelties){
    document.addEventListener('scroll', () => {
        if(scrollY > novelties.offsetHeight){
            btn.classList.add('btnUp-visible');
        }else{
            btn.classList.remove('btnUp-visible');
        }
        
    });
}



if(btn){
    btn.addEventListener('click', ()=>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth' 
      
        });
      });
}

//card-modal
const modal = document.querySelector('.card-modal'),
        modalBtn = document.querySelectorAll('.header__center-basket'),
        modalClose = document.querySelector('.card-modal__btn');


if(modalBtn){
    modalBtn.forEach(item => {
      item.addEventListener('click', () => {
        modal.classList.add('show');
        modal.classList.remove('hide');
      })
    })
}
if(modalClose){
    modalClose.addEventListener('click', () => {
        modal.classList.add('hide');
        modal.classList.remove('show');
    })
}


const filter = document.querySelector('.search__wrapper-filter');
const sidebar = document.querySelector('.sidebar--mobile');

filter.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-show')
})

});