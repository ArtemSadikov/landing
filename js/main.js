new Swiper('.slider', {
  slideClass: 'slider__item',
  wrapperClass: 'slider__list',
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: '.exp-section__pagination',
        type: 'bullets',
        bulletClass: 'paginator__item',
        bulletActiveClass: 'paginator__item--active'
      }
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
      loop: true,
      pagination: {
        el: '.exp-section__pagination',
        type: 'bullets',
        bulletClass: 'paginator__item',
        bulletActiveClass: 'paginator__item--active'
      }
    },

    1170: {
      slidesPerView: 3,
      spaceBetween: 60,
      loop: false,
      watchOverflow: true,
    }
  },
});