import React, { useEffect, useRef } from "react";
import { gsap, TextPlugin } from "gsap/all";

import Header from "./header";
import Scroller from "../components/custom/scroller";

import "../styles/landing.css";

gsap.registerPlugin(TextPlugin);

export default function Landing() {
  const landingTextRefs = useRef([]);
  const introRef = useRef(null);
  const yearRef = useRef(null);
  const introText =
    "I’m a Full Stack developer with a passion for UI/UX design, skilled in building and deploying user-friendly, scalable applications. I have experience in both frontend and backend development, as well as in DevOps and cloud technologies for managing deployments and infrastructure.";
  const yearText = "Folio 2025";

  useEffect(() => {
    gsap.fromTo(
      landingTextRefs.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        delay: 1,
        ease: "power4.out",
      }
    );
    if (introRef.current) {
      gsap.to(introRef.current, {
        text: introText,
        duration: 3,
        ease: "power4.inOut",
        delay: 1,
      });
    }

    if (yearRef.current) {
      gsap.to(yearRef.current, {
        text: yearText,
        duration: 3,
        ease: "power4.inOut",
        delay: 1,
      });
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="landing-container">
        <div ref={(el) => el && landingTextRefs.current.push(el)}>
          <div className="landing-text cursor-scale">hey</div>
          <div className="landing-text cursor-scale">this is</div>
          <div className="landing-text cursor-scale">rohan</div>
        </div>
        <div className="sub-landing-text">
          <span className="intro cursor-scale small" ref={introRef}></span>
          <span className="year cursor-scale small" ref={yearRef}></span>
        </div>
      </div>
      <Scroller />
    </div>
  );
}
