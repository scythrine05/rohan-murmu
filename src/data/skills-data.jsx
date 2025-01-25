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

const skillData = [
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

export { skillData };
