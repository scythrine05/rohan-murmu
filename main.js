import { gsap } from "gsap";
import splitType from "https://cdn.skypack.dev/split-type@0.3.3";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


const landing_text = new splitType('.landing-text', { types: 'chars' })
const chars = landing_text.chars

gsap.fromTo(
  chars,
  { 
    y: 100,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 1,
    ease: 'power4.out',
  }
)