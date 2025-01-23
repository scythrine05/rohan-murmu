import React, { useEffect } from "react";
import gsap from "gsap";

import "../../styles/cursor.css";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

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

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target.classList.contains("small")) {
        cursor.classList.add("grow-small");
      } else if (target.classList.contains("rotate")) {
        cursor.classList.add("grow-rotate");
      } else if (target.classList.contains("cursor-scale")) {
        cursor.classList.add("grow");
      }
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("grow", "grow-small", "grow-rotate");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default CustomCursor;
