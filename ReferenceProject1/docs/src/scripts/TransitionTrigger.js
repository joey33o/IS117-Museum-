import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: '#transition-trigger',
  start: 'top center', // fires when the trigger div's top edge hits the viewport center (~50% scroll)
  onEnter: () => {
    document.body.classList.add('is-space-era');
  },
  onLeaveBack: () => {
    document.body.classList.remove('is-space-era');
  },
});
