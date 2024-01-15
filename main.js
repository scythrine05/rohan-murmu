import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import "./scripts/loading";
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


const cursor = document.getElementById('cursor');

window.addEventListener("mousemove", e  => {

    const xPos = e.clientX;
    const yPos = e.clientY;

    cursor.style.left = `${xPos}px`;
    cursor.style.top = `${yPos}px`;

})
