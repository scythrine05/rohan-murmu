import React from "react";
import Card from "../components/card";
import { HeadingText } from "../components/text";

import "../styles/card-layout.css";

import { cardsData } from "../data/cards-data.jsx";

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
