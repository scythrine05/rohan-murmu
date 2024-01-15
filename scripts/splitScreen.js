import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

let panels = gsap.utils.toArray(".about-container.left .panel");

gsap.to(".panel", {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".scroller",
    scrub: true,
    pin: true,
    end: "+=300%",
  },
});
