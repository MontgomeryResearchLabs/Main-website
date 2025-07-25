gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray('.panel');

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.container',
    pin: true,
    scrub: 1,
    markers: true,
    start: 'top top',
    
    snap: 1 / (sections.length - 1),
    end: () => '+=' + document.querySelector('.container').offsetWidth,
  }
});
