import gsap from 'gsap'
import $ from 'jquery'

import Scroll from '../utils/scroll'

const page = document.querySelector('body')

if(page.id == 'sobre-a-lener'){
    const scroll = new Scroll()
    gsap.ticker.add(() => { 
        if(scroll.screenPosition > 150){
            $('header').addClass('active')
        } else {
            $('header').removeClass('active')
        }
    })

    const contato = $('#contato').offset().top - 100

    $('.button-contato').on('click', function(){
      $("body, html").animate({
        scrollTop : contato
      }, 1200);
  
      return false
    })

//     const buildings = $('#empreendimentos').offset().top - 100

//   $('.button-buildings').on('click', function(){
//     $("body, html").animate({
//       scrollTop : buildings
//     }, 1200);

//     return false
//   })
      
}

