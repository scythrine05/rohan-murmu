import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

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
    duration: 10,
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
    duration: 10,
  });
  