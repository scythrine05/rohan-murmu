import React from "react";
import { HeadingText } from "../components/text";
import {
  react,
  html,
  css,
  js,
  node,
  docker,
  figma,
  aws,
  postgres,
} from "../assets/skills";

import "../styles/skills.css";

const skillCategories = [
  {
    title: "Frontend technologies",
    skills: [
      { icon: react, name: "React" },
      { icon: html, name: "HTML" },
      { icon: css, name: "CSS" },
      { icon: js, name: "JavaScript" },
    ],
  },
  {
    title: "Backend technologies",
    skills: [{ icon: node, name: "Node.js" }],
  },
  {
    title: "DevOps and Cloud",
    skills: [
      { icon: docker, name: "Docker" },
      { icon: aws, name: "AWS" },
    ],
  },
  {
    title: "Design tools",
    skills: [{ icon: figma, name: "Figma" }],
  },
];

export default function Skills() {
  return (
    <div className="skill-container">
      <div>
        <HeadingText text={"what i know"} />
      </div>
      <div className="skill-wrapper">
        {skillCategories.map((category, index) => (
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
