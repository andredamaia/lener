import Scroll from '../utils/scroll'
import gsap from 'gsap'
import $ from 'jquery'

const pageurl = document.querySelector('body').id


if(pageurl == 'grupo-dinal'){
  const scroll = new Scroll()

  gsap.ticker.add(() => { 
    if(scroll.screenPosition > 150){
        $('header').addClass('active')
    } else {
        $('header').removeClass('active')
    }
  })
  
}