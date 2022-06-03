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
}

