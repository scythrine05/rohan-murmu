import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

gsap
  .to("#scrollingText", {
    x: -900,
    duration: 8,
    repeat: -1,
    ease: "linear",
  })
  .totalProgress(0.5);

gsap.to("#scrollingText", {
  xPercent: 15,
  scrollTrigger: {
    trigger: "#scrollingText",
    scrub: 1,
    end: "+=200%",
  },
});
