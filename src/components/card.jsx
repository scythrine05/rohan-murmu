import React from "react";

import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

const Card = ({ image, icons, link, githubLink }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="Card visual" />
      </div>
      <div className="card-buttons">
        <a href={link} className="link-btn" target="_blank">
          <LuExternalLink size={20} />
        </a>
        <a href={githubLink} className="link-btn" target="_blank">
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
