import Swiper, { Navigation, Scrollbar } from 'swiper';
import gsap from 'gsap'
import $ from 'jquery'

import Scroll from '../utils/scroll'

const pageurl = document.querySelector('body').id

Swiper.use([Navigation , Scrollbar]);

if(pageurl == 'home'){
  const scroll = new Scroll()

  gsap.ticker.add(() => { 
    if(scroll.screenPosition > 150){
        $('header').addClass('active')
    } else {
        $('header').removeClass('active')
    }
  })

  const swiperBanner = new Swiper('.swiper-banner', {
    slidesPerView: 1,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },

        1200: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
    },

  })
    

  const swiperEmpreendimentosArgentinafirst = new Swiper('.empreendimentos-argentina-first', {
    slidesPerView: 4,
    spaceBetween: 20,

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 5
        },

        1200: {
          slidesPerView: 4,
          spaceBetween: 20
        },
    }
  })

  const swiperEmpreendimentosArgentinaSecond = new Swiper('.empreendimentos-argentina-second', {
    slidesPerView: 4,
    spaceBetween: 20,

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 5
        },

        1200: {
          slidesPerView: 4,
          spaceBetween: 20
        },
    }
  })

  const swiperEmpreendimentosArgentinaThird = new Swiper('.empreendimentos-argentina-third', {
    slidesPerView: 4,
    spaceBetween: 20,

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 5
        },

        1200: {
          slidesPerView: 4,
          spaceBetween: 20
        },
    }
  })

  const swiperEmpreendimentosArgentinaFourth = new Swiper('.empreendimentos-argentina-fourth', {
    slidesPerView: 4,
    spaceBetween: 20,

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 5
        },

        1200: {
          slidesPerView: 4,
          spaceBetween: 20
        },
    }
  })

  const swiperEmpreendimentosArgentinaFifth = new Swiper('.empreendimentos-argentina-fifth', {
    slidesPerView: 4,
    spaceBetween: 20,

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 5
        },

        1200: {
          slidesPerView: 4,
          spaceBetween: 20
        },
    }
  })
}