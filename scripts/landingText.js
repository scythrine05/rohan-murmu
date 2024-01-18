import { gsap, TextPlugin } from "gsap/all";

gsap.registerPlugin(TextPlugin);

gsap.fromTo(
  ".landing-text",
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 4,
    delay: 7.5,
    ease: "power4.out",
  }
);

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".name-text").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }
    iteration += 1 / 3;
  }, 30);
};

const introText =
  "As a Full Stack developer with a flair for UI/UX design, I blend technical proficiency in frontend and backend development with a keen eye for user-centric design.";

gsap.to(".intro", {
  text: introText,
  duration: 5,
  ease: "power4.inOut",
  delay: 7.5,
});

const yearText = "Folio 2024";

gsap.to(".year", {
  text: yearText,
  duration: 5,
  ease: "power4.inOut",
  delay: 7.5,
});
