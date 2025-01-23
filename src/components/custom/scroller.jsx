import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../styles/scroller.css";

export default function Scroller() {
  const scrollingTextRef = useRef(null);

  useEffect(() => {
    if (scrollingTextRef.current) {
      gsap.to(scrollingTextRef.current, {
        x: "-100vw",
        duration: 5,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  return (
    <section className="spacer">
      <h1 id="scrollingText" ref={scrollingTextRef}>
        ui/ux frontend backend mobile devops cloud ui/ux frontend backend mobile
        cloud
      </h1>
    </section>
  );
}
