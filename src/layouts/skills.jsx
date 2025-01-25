import React from "react";
import { HeadingText } from "../components/text";

import { skillData } from "../data/skills-data";

import "../styles/skills.css";
export default function Skills() {
  return (
    <div className="skill-container">
      <div>
        <HeadingText text={"what i know"} />
      </div>
      <div className="skill-wrapper">
        {skillData.map((category, index) => (
          <div className="each-skill-wrapper" key={index}>
            <div className="each-skill-text">
              <h2>{category.title}</h2>
            </div>
            <div className="skill-content">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-icon-wrapper">
                  <img
                    src={skill.icon}
                    alt={`${skill.name}-icon`}
                    className="skill-icon"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
