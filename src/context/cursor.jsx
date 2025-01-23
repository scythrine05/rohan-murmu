import React, { createContext, useRef, useEffect, useContext } from "react";

import "../styles/cursor.css";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const updateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      requestAnimationFrame(updateCursor);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <CursorContext.Provider value={{ cursorRef }}>
      {children}
      <div className="cursor" id="cursor" ref={cursorRef} />
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  return useContext(CursorContext);
};
