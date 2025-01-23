import React from "react";
import Card from "../components/card";
import { HeadingText } from "../components/text";

import "../styles/card-layout.css";

import { FaInfinity } from "react-icons/fa";

const cardsData = [
  {
    image: "https://picsum.photos/500/320",
    icons: [
      {
        icon: <FaInfinity className="icon cursor-scale small" />,
        description: "Deployment streamlined with CI/CD",
      },
      {
        icon: <FaInfinity className="icon cursor-scale small" />,
        description: "Deployment streamlined with CI/CD",
      },
      {
        icon: <FaInfinity className="icon cursor-scale small" />,
        description: "Deployment streamlined with CI/CD",
      },
      {
        icon: <FaInfinity className="icon cursor-scale small" />,
        description: "Deployment streamlined with CI/CD",
      },
    ],
  },
  {
    image: "https://picsum.photos/500/320",
    icons: [
      {
        icon: <FaInfinity className="icon cursor-scale small" />,
        description: "Deployment streamlined with CI/CD",
      },
      {
        icon: <FaInfinity className="icon cursor-scale small" />,
        description: "Deployment streamlined with CI/CD",
      },
      {
        icon: <FaInfinity className="icon cursor-scale small" />,
        description: "Deployment streamlined with CI/CD",
      },
      {
        icon: <FaInfinity className="icon cursor-scale small" />,
        description: "Deployment streamlined with CI/CD",
      },
    ],
  },
  {
    image: "https://picsum.photos/500/320",
    icons: [
      {
        icon: <FaInfinity className="icon cursor-scale small" />,
        description: "Deployment streamlined with CI/CD",
      },
      {
        icon: <FaInfinity className="icon cursor-scale small" />,
        description: "Deployment streamlined with CI/CD",
      },
      {
        icon: <FaInfinity className="icon cursor-scale small" />,
        description: "Deployment streamlined with CI/CD",
      },
      {
        icon: <FaInfinity className="icon cursor-scale small" />,
        description: "Deployment streamlined with CI/CD",
      },
    ],
  },
  {
    image: "https://picsum.photos/500/320",
    icons: [
      {
        icon: <FaInfinity className="icon cursor-scale small" />,
        description: "Deployment streamlined with CI/CD",
      },
      {
        icon: <FaInfinity className="icon cursor-scale small" />,
        description: "Deployment streamlined with CI/CD",
      },
      {
        icon: <FaInfinity className="icon cursor-scale small" />,
        description: "Deployment streamlined with CI/CD",
      },
      {
        icon: <FaInfinity className="icon cursor-scale small" />,
        description: "Deployment streamlined with CI/CD",
      },
    ],
  },
];

const Projects = () => {
  return (
    <div className="project-container">
      <div>
        <HeadingText text={"my projects"} />
      </div>
      <div className="cards-layout">
        {cardsData.map((card, index) => (
          <Card key={index} image={card.image} icons={card.icons} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
