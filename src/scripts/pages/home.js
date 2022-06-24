import Swiper, { Navigation, Scrollbar, Pagination, Autoplay } from 'swiper';
import gsap from 'gsap'
import $ from 'jquery'

import Scroll from '../utils/scroll'

const pageurl = document.querySelector('body').id

Swiper.use([Navigation , Scrollbar , Pagination , Autoplay]);

if(pageurl == 'home'){
  const scroll = new Scroll()

  gsap.ticker.add(() => { 
    if(scroll.screenPosition > 150){
        $('header').addClass('active')
    } else {
        $('header').removeClass('active')
    }
  })

  // const changeNumber = document.querySelectorAll('[data-button]')

  // esconderNumero = () {
  //   const numeros = querySelectorAll('data-number')

  //   numeros.forEach
  // }

  // changeNumber.forEach(button => button.addEventListener('click', () => {
  //   const valor = button.dataSet.button


  // }))



  const swiperBanner = new Swiper('.swiper-banner', {
    slidesPerView: 1,
    autoplay: {
      delay: 6000,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: "fraction"
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

  const swiperNiceImoveis = new Swiper('.swiper-nice-imoveis', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 5
        },

        1200: {
          slidesPerView: 1,
          spaceBetween: 20
        },
    }
  })

  const swiperMarselhaImoveis = new Swiper('.swiper-marselha-imoveis', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 5
        },

        1200: {
          slidesPerView: 1,
          spaceBetween: 20
        },
    }
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

  const contato = $('#contato').offset().top - 100

  $('.button-contato').on('click', function(){
    $("body, html").animate({
      scrollTop : contato
    }, 1200);

    return false
  })

  const buildings = $('#empreendimentos').offset().top - 100

  $('.button-buildings').on('click', function(){
    $("body, html").animate({
      scrollTop : buildings
    }, 1200);

    return false
  })
}