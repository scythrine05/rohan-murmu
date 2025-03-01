import React, { createContext, useRef, useEffect, useContext } from "react";
import gsap from "gsap";
import "../styles/cursor.css";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const cursorRef = useRef(null);
  let mouseX = 0, mouseY = 0;
  let animationFrameId = null;

  useEffect(() => {
    if (!cursorRef.current) return;

    // Use GSAP's quickSetter for smooth updates
    const setCursor = gsap.quickSetter(cursorRef.current, "css");

    const updateCursor = () => {
      setCursor({ transform: `translate3d(${mouseX}px, ${mouseY}px, 0)` });
      animationFrameId = null;
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updateCursor);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <CursorContext.Provider value={{ cursorRef }}>
      {children}
      <div className="cursor" ref={cursorRef} />
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
