const tl = gsap.timeline({defaults: {ease: 'power2.Out'}});

tl.fromTo(
  '.slide1',
  {opacity: 0, y: '150'},
  {
    opacity: 1,
    duration: 3,
    y: '-0',
    scrollTrigger: {
      trigger: '.frame',
      start: 'top bottom',
      end: '500px 700px',
    //   markers: true,
      scrub: true,
    //   pin:true
    },
  }
)
  .fromTo(
    '.heading-h1',
    {y: '100', opacity: 0},
    {
      y: '0',
      opacity: 1,
      scrollTrigger: {
        trigger: '.slide1',
        start: 'top 90%',
        end: '500px 700px',
        // markers: true,
        scrub: true,
      },
    }
  )
  .fromTo(
    '.line',
    {y: '100', opacity: 0},
    {
      y: '0',
      opacity: 1,
      scrollTrigger: {
        trigger: '.slide1',
        start: 'top 80%',
        end: '500px 700px',
        // markers: true,
        scrub: true,
      },
    }
  )
  .fromTo(
    '.grad-img',
    {x: '200', opacity: 0},
    {
      x: '0',
      opacity: 1,
      scrollTrigger: {
        trigger: '.slide1',
        start: 'top 80%',
        end: '500px 700px',
        // markers: true,
        scrub: true,
      },
    }
  )
  .fromTo(
    '.slide2',
    {opacity: 0, y: '100'},
    {
      opacity: 1,
      duration: 3,
      y: '0',
      scrollTrigger: {
        trigger: '.slide2',
        start: 'top 80%',
        end: '500px 700px',
        // markers: true,
        scrub: true,
      },
    }
  )
  
  .fromTo(
    '.slide3',
    {opacity: 0, y: '100'},
    {
      opacity: 1,
      duration: 3,
      y: '0',
      scrollTrigger: {
        trigger: '.slide3',
        start: 'top 80%',
        end: '500px 700px',
        // markers: true,
        scrub: true,
      },
    }
  )
  .fromTo(
    '.slide4',
    {opacity: 0, y: '100'},
    {
      opacity: 1,
      duration: 3,
      y: '0',
      scrollTrigger: {
        trigger: '.slide4',
        start: 'top 80%',
        end: '500px 700px',
        // markers: true,
        scrub: true,
      },
    }
  );
