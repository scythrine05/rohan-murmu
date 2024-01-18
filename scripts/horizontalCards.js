import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function AddCards() {
  const newCard = `<div class="panel">
    <div class="panel-item">
    <div class="panel-item-content">
    <div class="panel-text">
    <div class="panel-icons">
    <a href="#" class="cursor-scale rotate"><i class="bi bi-box-arrow-up-right"></i></a>
    </div>
    
    
    <h1 class="cursor-scale small">Lorem Ipsum</h1>
    <p class="cursor-scale small">
    Lorem ipsum is simple dummy text on the printing and
    typesetting industry.Lorem ipsum is simple dummy text on the printing and
    typesetting industry.Lorem ipsum is simple dummy text on the printing and
    typesetting industry.
    </p>
    <div class="panel-icons">
    <a href="#" class="cursor-scale rotate"><i class="bi bi-github"></i></a>
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

if (window.innerWidth >= 725) {
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
    ".panel-item-content-main h1",
    {
      rotate: "-270deg",
      scrollTrigger: {
        pin: true,
      },
    },

    0
  );

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
}
