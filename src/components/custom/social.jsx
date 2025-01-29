import React from "react";
import { linkData } from "../../data/links-data";

import "../../styles/social.css";

export default function Social() {
  return (
    <div className="social-group">
      {linkData.map((link, index) => {
        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            {link.icon}
          </a>
        );
      })}
    </div>
  );
}
