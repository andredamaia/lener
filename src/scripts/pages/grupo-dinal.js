import Scroll from '../utils/scroll'
import gsap from 'gsap'
import $ from 'jquery'
import anime from 'animejs'

const pageurl = document.querySelector('body').id


if(pageurl == 'grupo-dinal'){
  const scroll = new Scroll()

  gsap.ticker.add(() => { 
    if(scroll.screenPosition > 80){
        $('header').addClass('active')
    } else {
        $('header').removeClass('active')
    }
  })

  var empreendimentosNumber = document.querySelector('.numbers-empreendimentos');
  var clientesNumber = document.querySelector('.numbers-clientes');
  var anosNumber = document.querySelector('.numbers-anos');
  var vendedoresNumber = document.querySelector('.numbers-vendedores');

  var battery = {
    empreendimentosNumber: '0',
      anosNumber: '0+',
      clientesNumber: '0',
      vendedoresNumber: '0'
  }

  anime({
    targets: battery,
    empreendimentosNumber: '78',
    anosNumber: '20+',
    clientesNumber: '2100',
    vendedoresNumber: '18',
    round: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    duration: 2500,
    update: function() {
        empreendimentosNumber.innerHTML = battery.empreendimentosNumber;
        anosNumber.innerHTML = battery.anosNumber;
        clientesNumber.innerHTML = battery.clientesNumber;
        vendedoresNumber.innerHTML = battery.vendedoresNumber;
    }
})

const contato = $('#contato').offset().top - 100

$('.button-contato').on('click', function(){
  $("body, html").animate({
    scrollTop : contato
  }, 1200);

  return false
})

// const buildings = $('#empreendimentos').offset().top - 100

//   $('.button-buildings').on('click', function(){
//     $("body, html").animate({
//       scrollTop : buildings
//     }, 1200);

//     return false
//   })
  
}