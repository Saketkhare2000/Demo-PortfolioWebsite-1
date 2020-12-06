gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({defaults: {ease: 'power4'}});

tl.to('.box1', {
  duration: 10,
  opacity: 0,
  scale: 0.8,
  scrollTrigger: {
    trigger: '.box2',
    start: 'top 80%', //top(1st Value) - element(box) , center(2nd Value) - screen
    end: 'top 10%', // edit 2nd value(i.e.38%) so that 2nd slide exactly stop above 1st slide. Also 2nd slide z index must be greater
    // scrub: 4, // Strict animation while scrolling
    pin: '.box1',
    scrub: true,
    pinSpacing: false,
    // markers: true,
    toggleActions: 'restart none none none',
  },
})
  .to('.box2', {
    duration: 8,
    opacity: 0,
    scale: 0.8,
    scrollTrigger: {
      trigger: '.box2',
      start: 'top 3%', //top(1st Value) - element(box) , center(2nd Value) - screen
      end: 'bottom 3%', // edit 2nd value(i.e.38%) so that 2nd slide exactly stop above 1st slide. Also 2nd slide z index must be greater
      // scrub: 4, // Strict animation while scrolling
      pin: '.box2',
      scrub: true,
      pinSpacing: false,
      //   markers: true,
      toggleActions: 'restart none none none',
    },
  })
  .to('.box3', {
    duration: 8,
    opacity: 0,
    scale: 0.8,
    scrollTrigger: {
      trigger: '.box3',
      start: 'top 3%', //top(1st Value) - element(box) , center(2nd Value) - screen
      end: 'bottom 3%', // edit 2nd value(i.e.38%) so that 2nd slide exactly stop above 1st slide. Also 2nd slide z index must be greater
      // scrub: 4, // Strict animation while scrolling
      pin: '.box3',
      scrub: true,
      pinSpacing: false,
      // markers: true,
      toggleActions: 'restart none none none',
    },
  });
