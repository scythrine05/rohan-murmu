import React from "react";

import "../styles/text.css";

export function HeadingText({ text }) {
  return (
    <div>
      <h1 className="heading-text cursor-scale">{text}</h1>
    </div>
  );
}
