import {
  FaRegWindowMaximize,
  FaInfinity,
  FaServer,
  FaRocket,
  FaPlug,
  FaDatabase,
  FaStar,
  FaCommentAlt,
  FaMobileAlt,
} from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";

const cardsData = [
  {
    image: "src/assets/projects/devtation.webp",
    cardLink: "https://devtation.rohanworks.com",
    githubLink: "https://github.com/scythrine05/Devtation-client",
    icons: [
      {
        icon: <FaRegWindowMaximize className="icon cursor-scale small" />,
        description:
          "Build with React Typescript, Tailwind and Flowbite-react UI",
      },
      {
        icon: <FaServer className="icon cursor-scale small" />,
        description: "Backend built with Node.js, Express, and MongoDB",
      },
      {
        icon: <FaRocket className="icon cursor-scale small" />,
        description:
          "Containerized with Docker and deployed on AWS EC2 with Nginx",
      },
      {
        icon: <FaInfinity className="icon cursor-scale small" />,
        description:
          "Deployment streamlined with CI/CD pipeline using Github Actions",
      },
    ],
  },
  {
    image: "src/assets/projects/bindboard.webp",
    cardLink: "https://bindboard.rohanworks.com",
    githubLink: "https://github.com/scythrine05/bindboard",
    icons: [
      {
        icon: <FaRegWindowMaximize className="icon cursor-scale small" />,
        description: "Build with React Typescript and PrimeReact UI",
      },
      {
        icon: <FaPlug className="icon cursor-scale small" />,
        description: "Real time communication with Websockets",
      },
      {
        icon: <FaDatabase className="icon cursor-scale small" />,
        description: "Implemented persistent data caching using Redis",
      },
      {
        icon: <FaRocket className="icon cursor-scale small" />,
        description:
          "Deployed on AWS EC2 using Docker Compose, and served via Nginx",
      },
    ],
  },
  {
    image: "src/assets/projects/portfolio.webp",
    cardLink: "https://www.rohanworks.com/",
    githubLink: "https://github.com/scythrine05/rohan-murmu",
    icons: [
      {
        icon: <FaRegWindowMaximize className="icon cursor-scale small" />,
        description: "Build with React and styled with CSS",
      },
      {
        icon: <FaStar className="icon cursor-scale small" />,
        description: "Animated with Greensock Animation Library",
      },
      {
        icon: <FaCommentAlt className="icon cursor-scale small" />,
        description: "Implemented messaging feature with Firestore",
      },
      {
        icon: <FaRocket className="icon cursor-scale small" />,
        description: "Deployed on Vercel with Github Integration",
      },
    ],
  },
  {
    image: "src/assets/projects/tukkit.webp",
    cardLink: "https://tukkit.rohanworks.com",
    githubLink: "https://github.com/scythrine05/tukkit-mobile",
    icons: [
      {
        icon: <FaMobileAlt className="icon cursor-scale small" />,
        description: "Build with React Native CLI",
      },
      {
        icon: <MdAdminPanelSettings className="icon cursor-scale small" />,
        description: "Admin panel built with Next and Tailwind",
      },
      {
        icon: <FaDatabase className="icon cursor-scale small" />,
        description: "Data managed with Firebase Firestore",
      },
      {
        icon: <FaRocket className="icon cursor-scale small" />,
        description: "Deployed landing website and admin panel with Vercel",
      },
    ],
  },
];

export { cardsData };
