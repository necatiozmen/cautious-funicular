import { TweenLite, Power2, Power4, TimelineMax } from 'gsap';


const tl = new TimelineMax();
const tl2 = new TimelineMax();

export const AnimationHelper = {
    introText: {
        first: () => {
            const text2 = document.getElementsByClassName('text-2');
            tl.fromTo(
                'div.text-3',
                2,
                { x: -400, ease: Power2.easeIn },
                {
                    x: 0,
                    color: `red`,
                },
            );

            tl.to('div.text-3', 1, {
                x: `-${(window.innerWidth / 2) - 160}`,
                y: `-${(window.innerHeight / 2) - 20}`,
                scale: 1.6,
                ease: Power2.easeIn,

            }, '+=0.5')
        }
    },

    images: {
        intro: () => {
            const man = document.getElementsByClassName('img-man');
            const woman = document.getElementsByClassName('img-woman');

            tl.fromTo(man, 1.5, { x: -700, ease: Power4.easeIn, opacity: 0 }, {
                x: 0, delay: 2,
                scale: 2.3,
                autoAlpha: 0.7,
            }, 0)


            tl.to(man, 0.5, { opacity: 0, ease: Power4.easeIn });

            tl2.fromTo(woman, 1.5, { x: 700, ease: Power4.easeIn, opacity: 0 }, {
                x: 0, delay: 2,
                scale: 2.3,
                autoAlpha: 0.7,
            }, 0)

            tl2.to(woman, 0.5, { opacity: 0, ease: Power4.easeIn });
        }
    }

}