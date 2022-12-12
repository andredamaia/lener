import Swiper from 'swiper';

import Scroll from '../utils/scroll'

const pageurl = document.querySelector('body').id

if(pageurl == 'residencial-marselha-landing-page'){
  const scroll = new Scroll()

    var swiperlanding = new Swiper(".landing-area-swiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },

      822: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
  },
  });

}