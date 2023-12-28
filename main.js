import { gsap } from "gsap";
import splitType from "https://cdn.skypack.dev/split-type@0.3.3";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const landing_text = new splitType(".landing-text", { types: "chars" });
const chars = landing_text.chars;

gsap.fromTo(
  chars,
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 1,
    ease: "power4.out",
  }
);

gsap.to("#scrollingText", {
  x: -1000,
  duration: 8,
  repeat: -1,
  ease: "linear",
});

gsap.to("#scrollingText", {
  xPercent: 15,
  scrollTrigger: {
    trigger: "#scrollingText",
    scrub: 1,
    end: "+=200%",
  },
});


let panels = gsap.utils.toArray(".about-container.left .panel");

gsap.to(".panel", {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".scroller",
    scrub: true,
    pin: true,
    end: "+=300%",
    pinSpacing: true
  }
});
