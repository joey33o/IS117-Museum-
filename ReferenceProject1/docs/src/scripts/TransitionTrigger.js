import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const trigger = document.querySelector('#transition-trigger');
const bridge = document.querySelector('#space-bridge');
const bridgeSticky = document.querySelector('.space-bridge-sticky');
const bridgeText = document.querySelector('#space-bridge-text');
const corners = gsap.utils.toArray('.space-corner');
const era2 = document.querySelector('#era-2');

if (bridge && bridgeSticky && bridgeText && corners.length && era2) {
  gsap.set(era2, {
    opacity: 0.35,
    y: 26,
  });

  gsap.timeline({
    scrollTrigger: {
      trigger: bridge,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.65,
    },
  })
  .to(bridgeSticky, {
    backgroundColor: '#ffffff',
    duration: 0.35,
    ease: 'none',
  }, 0)
  .to(bridgeText, {
    opacity: 1,
    y: 0,
    duration: 0.25,
    ease: 'none',
  }, 0.12)
  .to(bridgeText, {
    opacity: 1,
    y: 0,
    duration: 0.28,
    ease: 'none',
  }, 0.45)
  .to(bridgeText, {
    opacity: 0,
    y: -14,
    duration: 0.2,
    ease: 'none',
  }, 0.68)
  .to(corners, {
    opacity: 0.88,
    scale: 1.35,
    duration: 0.34,
    stagger: 0.02,
    ease: 'none',
  }, 0.68)
  .to(bridgeSticky, {
    backgroundColor: '#040404',
    duration: 0.22,
    ease: 'none',
  }, 0.84)
  .to(era2, {
    opacity: 1,
    y: 0,
    duration: 0.3,
    ease: 'none',
  }, 0.78);
}

if (trigger) {
  ScrollTrigger.create({
    trigger,
    start: 'top 78%', // trigger earlier for smoother handoff into Era 2
    onEnter: () => {
      document.body.classList.add('is-space-era');
    },
    onLeaveBack: () => {
      document.body.classList.remove('is-space-era');
    },
  });
}
