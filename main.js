import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// import "./scripts/loading";
import "./scripts/landingText";
import "./scripts/marqueeText";
// import "./scripts/splitScreen";
import "./scripts/horizontalCards";

var textboxes = document.querySelectorAll(".input-text");

// Iterate over each textbox
textboxes.forEach(function (textbox) {
  // Add an event listener for the 'input' event
  textbox.addEventListener("input", function () {
    // Check if the textbox has some value
    if (this.value.trim() !== "") {
      // If it has a value, add the 'not-empty' class
      this.classList.add("not-empty");
    } else {
      // If it's empty, remove the 'not-empty' class
      this.classList.remove("not-empty");
    }
  });
});

let cursor = document.querySelector(".cursor");
let cursorScale = document.querySelectorAll(".cursor-scale");
let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

cursorScale.forEach((link) => {
  link.addEventListener("mousemove", () => {
    cursor.classList.add("grow");
    if (link.classList.contains("small")) {
      cursor.classList.remove("grow");
      cursor.classList.add("grow-small");
    } else if (link.classList.contains("rotate")) {
      cursor.classList.remove("grow");
      cursor.classList.add("grow-rotate");
      console.log("hello");
    }
  });

  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
    cursor.classList.remove("grow-small");
    cursor.classList.remove("grow-rotate");
  });
});

let reveal = document.querySelectorAll(".reveal");

reveal.forEach((el) => {
  let headings = el.querySelectorAll("h1, h2, h3, p"); // Add more elements to reveal

  let tl = gsap.timeline().from(headings, {
    y: 80,
    stagger: 0.05,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  ScrollTrigger.create({
    trigger: el,
    start: "center 100%",
    end: "top 50%",
    toggleActions: "play none none reverse ",
    animation: tl,
  });
});

document.querySelectorAll(".skill-content").forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    const type = item.getAttribute("data-type");

    document
      .querySelectorAll(`.skill-content[data-type="${type}"]`)
      .forEach((each) => {
        each.classList.add("skill-glow");
      });
  });

  item.addEventListener("mouseout", () => {
    document.querySelectorAll(".skill-content").forEach((groupItem) => {
      groupItem.classList.remove("skill-glow");
    });
  });
});
