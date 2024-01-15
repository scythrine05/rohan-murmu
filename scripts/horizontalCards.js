import { gsap } from "gsap";
import { project_data } from "../data/projectData";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// let cardTimeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".cards",
//       pin: true,
//       pinSpacing: true,
//       start: "left-=120px left",
//       end: "+=200",
//       scrub: 1,
//     },
//   });

//   cardTimeline.addLabel("card1");
//   cardTimeline.to(".card-1", {
//     xPercent: 0,
//     opacity: 1,
//   });

//   cardTimeline.from   (".card-2", {
//     xPercent: 75,
//     opacity: 0,
//   });

//   cardTimeline.addLabel("card2");

//   cardTimeline.to(
//     ".card-1",
//     {
//       scale: 0.95,
//       xPercent: -0.5,
//       opacity: 0.5,
//     },
//     "-=0.3"
//   );

//   cardTimeline.to(".card-2", {
//     xPercent: 0,
//     opacity: 1,
//     duration: 10,
//   });

//   cardTimeline.from(".card-3", {
//     xPercent: 75,
//     opacity: 0,
//   });

//   cardTimeline.addLabel("card3");

//   cardTimeline.to(
//     ".card-2",
//     {
//       scale: 0.98,
//       xPercent: -0.4,
//       opacity: 0.6,
//     },
//     "--0.3"
//   );

//   cardTimeline.to(".card-3", {
//     xPercent: 0,
//     opacity: 1,
//     duration: 10,
//   });

// const overlay = document.querySelector(".overlay");
// const closeBtn = document.querySelector("#close-btn");

// const tl = gsap.timeline({ paused: true, overwrite: "auto" });

// tl.to(overlay, {
//   duration: 0.5,
//   bottom: "0px",
//   rotation: 0,
//   transformOrigin: "bottom center",
//   ease: "power3.inOut",
// });

// const items = document.querySelectorAll(".item");
// items.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     updateOverlay(project_data[index]);
//     tl.play();
//   });
// });

// closeBtn.addEventListener("click", () => {
//   tl.reverse();
// });

// function updateOverlay(dataItem) {
//   const itemName =
//     document.querySelector("#item-category").previousElementSibling;
//   const itemCategory = document.querySelector("#item-category");

//   const itemLink = document.querySelector("#item-link");
//   const itemCopy = document.querySelector("#item-copy");
//   const itemImg = document.querySelector("#item-img");

//   itemName.textContent = dataItem.itemName;
//   itemCategory.textContent = dataItem.itemCategory;
//   itemLink.href = dataItem.itemCategory;
//   itemCopy.textContent = dataItem.itemCopy;
//   itemImg.src = dataItem.itemImg;
// }

// document.addEventListener("click", (e) => {
//   if (!overlay.contains(e.target) && !isItem(e.target)) {
//     tl.reverse();
//   }
// });

// function isItem(target) {
//   return target.closest(".item");
// }

// let target = 0;
// let current = 0;
// let ease = 0.075;

// const slider = document.querySelector(".slider");
// const sliderWrapper = document.querySelector(".slider-wrapper");
// const markerWrapper = document.querySelector(".marker-wrapper");
// const activeSlide = document.querySelector(".active-slide");

// let maxScroll = sliderWrapper.offsetWidth - window.innerWidth;

// function lerp(start, end, factor) {
//   return start + (end - start) * factor;
// }

// function updateActiveSliderNumber(markerMove, markerMaxMove) {
//   const partWidth = markerMaxMove / 10;
//   let currentPart = Math.round((markerMove - 70) / partWidth) + 1;
//   currentPart = Math.min(10, currentPart);
//   activeSlide.textContent = `${currentPart}/10`;
// }

// function update() {
//   current = lerp(current, target, ease);

//   gsap.set(".slider-wrapper", {
//     x: -current,
//   });

//   let moveRatio = current / maxScroll;

//   let markerMaxMove = window.innerWidth - markerWrapper.offsetWidth - 170;
//   let markerMove = 70 + moveRatio * markerMaxMove;

//   gsap.set(".marker-wrapper", {
//     x: markerMove,
//   });

//   updateActiveSliderNumber(markerMove, markerMaxMove);
//   requestAnimationFrame(update);
// }

// window.addEventListener("resize", () => {
//   maxScroll = sliderWrapper.offsetWidth - window.innerWidth;
// });

// window.addEventListener("wheel", (e) => {
//   target += e.deltaY;

//   target = Math.max(0, target);
//   target = Math.max(maxScroll, target);
// });

// update();

// let sections = gsap.utils.toArray(".stage");

// gsap.to(sections, {
//   //xPercent: -100 * (sections.length - 1),
//   x: () =>
//     -(
//       document.querySelector("#hscroll").scrollWidth -
//       document.documentElement.clientWidth
//     ) + "px",
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#hscroll",
//     pin: true,
//     markers: true,
//     start:"center center",
//     scrub: 1,
//     snap: 0, //for Snap-> 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: () => "+=" + document.querySelector("#hscroll").offsetWidth,
//   },
// });

function AddCards() {
  const newCard = `<div class="panel">
    <div class="panel-item">
    <div class="panel-item-content">
    <div class="panel-text">
    <div class="panel-icons">
    <i class="bi bi-box-arrow-up-right"></i>
    </div>
    
    
    <h1>Lorem Ipsum</h1>
    <p>
    Lorem ipsum is simple dummy text on the printing and
    typesetting industry.Lorem ipsum is simple dummy text on the printing and
    typesetting industry.Lorem ipsum is simple dummy text on the printing and
    typesetting industry.
    </p>
    <div class="panel-icons">
    <i class="bi bi-github" style="font-size:24px;"></i>
    </div>
    </div>
    <img
    src="https://lvivity.com/wp-content/uploads/2020/09/ui-ux-principles.jpg"
    alt=""
    />
    </div>
    </div>
    </div>`;

  for (let i = 0; i < 4; i++) {
    project_container.innerHTML += newCard;
  }
}

const project_container = document.querySelector(".project-container");

AddCards();

let tl = gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: 1,
    trigger: project_container,
    end: () =>
      project_container.scrollWidth - document.documentElement.clientWidth,
  },
  defaults: { ease: "none", duration: 1 },
});

tl.to(
  ".panel",
  {
    x: () =>
      -(project_container.scrollWidth - document.documentElement.clientWidth),
  },
  0
);

tl.to(
  ".project-text",
  {
    x: () =>
      project_container.scrollWidth - document.documentElement.clientWidth,
  },
  0
);
