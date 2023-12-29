import { gsap } from "gsap";
import splitType from "https://cdn.skypack.dev/split-type@0.3.3";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Loading Screen

document.addEventListener("DOMContentLoaded", () => {
  const counter3 = document.querySelector(".counter-3");

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      const div = document.createElement("div");
      div.className = "num";
      div.textContent = j;
      counter3.appendChild(div);
    }
  }

  const finalDiv = document.createElement("div");
  finalDiv.className = "num";
  finalDiv.textContent = "0";
  counter3.appendChild(finalDiv);

  function animate(counter, duration, delay = 0) {
    const numHeight = counter.querySelector(".num").clientHeight;
    const totalDistance =
      (counter.querySelectorAll(".num").length - 1) * numHeight;

    gsap.to(counter, {
      y: -totalDistance,
      duration: duration,
      delay: delay,
      ease: "power2.inOut",
    });
  }

  animate(counter3, 5);
  animate(document.querySelector(".counter-2"), 6);
  animate(document.querySelector(".counter-1"), 2, 4);
});

gsap.to(".digit", {
  top: "-150px",
  stagger: {
    amount: 0.25,
  },
  delay: 6,
  duration: 1,
  ease: "power4.inOut",
});

gsap.from(".loader-1", {
  width: 0,
  duration: 6,
  ease: "power2.inOut",
});

gsap.from(".loader-2", {
  width: 0,
  delay: 1.9,
  duration: 6,
  ease: "power2.inOut",
});

gsap.to(".loader", {
  background: "none",
  delay: 6,
  duration: 0.1,
});

gsap.to(".loader-1", {
  rotate: 90,
  y: -50,
  duration: 0.5,
  delay: 6,
});

gsap.to(
  ".loader-2",
  {
    x: -75,
    y: 75,
    duration: 0.5,
  },
  "<"
);

gsap.to(".loader", {
  scale: 40,
  duration: 1,
  delay: 7,
  ease: "power2.inOut",
});

gsap.to(".loader", {
  rotate: 45,
  y: 500,
  x: 2000,
  duration: 1,
  delay: 7,
  ease: "power2.inOut",
});

gsap.to(".loading-screen", {
  opacity: 0,
  duration: 0.5,
  delay: 7.5,
  ease: "power1.inOut",
});

// Landing Screen

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
    delay: 7.5,
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
    scrub: true,
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
