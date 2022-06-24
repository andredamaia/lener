import Preload from 'preload-it'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Load {
    constructor(options){
        this.container = options.domElement

        this.preload = Preload()
        this.preloadProgress = document.querySelector('.preload .contador')

        this.randomY = gsap.utils.random(30, 60)
        this.randomDuration = gsap.utils.random(0.5, 1.5)
        this.randomStagger = gsap.utils.random(0.1, 0.4)

        this.load()
    }

    load() {
        this.preload.fetch([
            '../boilerplate/public/images/banner-sobre.jpg',
            '../boilerplate/public/images/20-anos.png',
            '../boilerplate/public/images/empreendimentos-argentina-1.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-2.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-3.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-4.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-5.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-6.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-7.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-8.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-9.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-10.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-11.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-12.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-13.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-14.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-15.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-16.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-17.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-18.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-19.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-20.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-21.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-22.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-23.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-24.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-25.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-26.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-27.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-28.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-29.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-30.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-31.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-32.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-33.jpg',
            '../boilerplate/public/images/empreendimentos-argentina-34.jpg',
            '../boilerplate/public/images/marselha-3.jpg',
            '../boilerplate/public/images/marselha-4.jpg',
            '../boilerplate/public/images/marselha-5.jpg',
            '../boilerplate/public/images/marselha-6.jpg',
            '../boilerplate/public/images/marselha-7.jpg',
            '../boilerplate/public/images/marselha-8.jpg',

        ]).then(() => {
            // Animation executed when loading finish
            const enterAnimantion = gsap.timeline({ delay: 1 })
        
            enterAnimantion.to('.preload', {
                duration: .5,
                autoAlpha: 0,
                ease: 'power3.inOut'
            })
            enterAnimantion.to('.preload .contador', {
                duration: .8,
                autoAlpha: 0,
                skewY: 6,
                y: -20,
                delay: -.8,
                ease: 'power3.inOut'
            })
            enterAnimantion.to('.preload .loader', {
              duration: .8,
              autoAlpha: 0,
              skewY: 6,
              y: -20,
              delay: -.8,
              ease: 'power3.inOut'
          })
            enterAnimantion.fromTo(
                '.main *',
                {
                    autoAlpha: 0,
                    y: 30
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    ease: "power2.out",
                    stagger: .05,
                    duration: .6
                }
            )
            
            // General animation
            document.querySelectorAll("footer").forEach((text) => {
                const tl = gsap.timeline({
                  scrollTrigger: {
                    trigger: text,
                    end: "+=60%",
                  },
                });
            
                tl.set(text, {
                  autoAlpha: 0,
                  y: this.randomY,
                }).fromTo(
                  text,
                  {
                    autoAlpha: 0,
                  },
                  {
                    autoAlpha: 1,
                    duration: 1.8,
                    y: 0,
                    duration: this.randomDuration,
                    ease: "power2.out",
                  }
                );
            });
        })
        
        this.preload.onprogress = event => {
            this.preloadProgress.textContent = event.progress + '%'
        }
    }
}