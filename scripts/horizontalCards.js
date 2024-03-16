import { gsap } from "gsap";
import { project_data } from "../data/projectData";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function AddCards() {
  const newCard = (i) => {
    return `<div class="panel">
    <div class="panel-item">
    <div class="panel-item-content">
    <div class="panel-text">
    <div class="panel-icons">
    <a href="${project_data[i].plink}" class="cursor-scale rotate" target="_blank"><i class="bi bi-box-arrow-up-right"></i></a>
    </div>
    
    
    <h1 class="cursor-scale small">${project_data[i].pname}</h1>
    <p class="cursor-scale small">
    ${project_data[i].pdesc}
    </p>
    <div class="panel-icons">
    <a href="${project_data[i].pgithub}" class="cursor-scale rotate" target="_blank"><i class="bi bi-github"></i></a>
    </div>
    </div>
    <img
    src="${project_data[i].pimg}"
    alt=""
    />
    </div>
    </div>
    </div>`;
  };

  for (let i = 0; i < project_data.length ; i++) {
    project_container.innerHTML += newCard(i);
  }
}

const project_container = document.querySelector(".project-container");

AddCards();

if (window.innerWidth > 725) {
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
