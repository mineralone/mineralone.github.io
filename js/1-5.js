new Swiper('.brands-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoHeight: false,
    slidesPerView: 1.4,
    spaceBetween: 16,
    slidesPerGroup: 1,
    centeredSlides: false,
    watchOverflow: true,
    loop: false,
    freeMode: true,
    centerInsufficientSlides: true,
    slidesOffsetAfter: 40,
    breakpoints: {
        480: {
            slidesPerView: 2.2,
        },
        700: {
            slidesPerView: 3.2,
        },
        768: {
            slidesPerView: Infinity,
        }
    }
});

const brands = document.querySelector('.brands')
const brandsButton = brands.querySelector('.brands__btn-see');
const brandsList = brands.querySelector('.brands-list');

brandsButton.addEventListener('click', function() {
    let brandsButtonShow = brands.querySelector('.floating-button_show-el');
    let brandsListHide = brands.querySelector('.brands-list_hide');
    if (brandsButtonShow && brandsListHide) {
        brandsButton.classList.add('floating-button_hide');
        brandsButton.classList.remove('floating-button_show-el');
        brandsList.classList.add('brands-list_show');
        brandsList.classList.remove('brands-list_hide');
    }
    else  {
        brandsButton.classList.add('floating-button_show-el');
        brandsButton.classList.remove('floating-button_hide');
        brandsList.classList.remove('brands-list_show');
        brandsList.classList.add('brands-list_hide');
    };
});


