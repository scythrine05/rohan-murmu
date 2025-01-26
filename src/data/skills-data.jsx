import {
  react,
  js,
  node,
  docker,
  figma,
  ps,
  firebase,
  aws,
  express,
  postgres,
  mongodb,
  vue,
  nginx,
  illustrator,
  blender,
  tailwind,
} from "../assets/skills";

const skillData = [
  {
    title: "Frontend technologies",
    skills: [
      { icon: js, name: "JavaScript" },
      { icon: react, name: "React" },
      { icon: vue, name: "Vue" },
      { icon: tailwind, name: "TailwindCSS" },
    ],
  },
  {
    title: "Backend technologies",
    skills: [
      { icon: node, name: "Node.js" },
      { icon: postgres, name: "PostgreSQL" },
      { icon: express, name: "Express" },
      { icon: mongodb, name: "MongoDB" },
    ],
  },
  {
    title: "DevOps and Cloud",
    skills: [
      { icon: docker, name: "Docker" },
      { icon: aws, name: "AWS" },
      { icon: nginx, name: "Nginx" },
      { icon: firebase, name: "Firebase" },
    ],
  },
  {
    title: "Design Tools",
    skills: [
      { icon: figma, name: "Figma" },
      { icon: ps, name: "Photoshop" },
      { icon: illustrator, name: "Illustrator" },
      { icon: blender, name: "Blender" },
    ],
  },
];

export { skillData };
