import { gsap } from "gsap";
import splitType from "https://cdn.skypack.dev/split-type@0.3.3";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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
  x: -900,
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
    scrub: 3,
    pin: true,
    end: "+=300%",
  },
});


// Cards

let cardTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".cards",
    pin: true,
    pinSpacing: true,
    start: "left-=120px left",
    end: "+=200",
    scrub: 1,
  },
});

cardTimeline.addLabel("card1");
cardTimeline.to(".card-1", {
  xPercent: 0,
  opacity: 1,
});

cardTimeline.from(".card-2", {
  xPercent: 75,
  opacity: 0,
});

cardTimeline.addLabel("card2");

cardTimeline.to(
  ".card-1",
  {
    scale: 0.95,
    xPercent: -0.5,
    opacity: 0.5,
  },
  "-=0.3"
);

cardTimeline.to(".card-2", {
  xPercent: 0,
  opacity: 1,
});

cardTimeline.from(".card-3", {
  xPercent: 75,
  opacity: 0,
});

cardTimeline.addLabel("card3");

cardTimeline.to(
  ".card-2",
  {
    scale: 0.98,
    xPercent: -0.4,
    opacity: 0.6,
  },
  "--0.3"
);

cardTimeline.to(".card-3", {
  xPercent: 0,
  opacity: 1,
})