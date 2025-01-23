import React from "react";

import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

const Card = ({ image, icons }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="Card visual" />
      </div>
      <div className="card-buttons">
        <a href="/" className="link-btn">
          <LuExternalLink size={20} />
        </a>
        <a href="/" className="link-btn">
          <FaGithub size={20} />
        </a>
      </div>
      <div className="card-details">
        {icons.map((icon, index) => (
          <div key={index} className="icon-description cursor-scale small">
            <div className="cursor-scale small">{icon.icon}</div>
            <p className="description cursor-scale small">{icon.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
