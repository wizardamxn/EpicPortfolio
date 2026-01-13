import { path } from "motion/react-client";

export const myProjects = [
  {
    id: 1,
    title: "WatchTHIS!",
    description:
      "Wanna know your next binge watch or perhaps wanna live through that heartbreaking moment where your favorite character dies!",
    subDescription: [
      "For the Frontend used React with tailwindcss for a sleek and modern UI.",
      "Used Artificial Intelligence to gather the next part of your heart.",
      "A watchList for your next binge watching ceremony",
      "Developed using TMDB API, and Firebase for the backend.",
    ],
    LinkToWeb: 'https://watchthis-wizardamxn.vercel.app/',

    href: "",
    logo: "",
    image: "/assets/WatchThis.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/firebasebig.png",
      },
      {
        id: 2,
        name: "TMDB-API",
        path: "/assets/Tmdb.new.logo.svg",
      },
      {
        id: 3,
        name: "Firebase",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "Redux",
        path: "/assets/logos/redux.svg",
      },
    ],
  },
  {
    id: 2,
    LinkToWeb: 'https://amanahmad.xyz',
    title: "Epic Portfolio!",
    description:
      "Portfolio of my own, its EPIC!",
    subDescription: [
      "Integrated Framer Motion for seamless navigation throughout the website.",
      "Implemented 3D objects with three.js",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Email.js for seamless communication between me and your majesty",
    ],
    href: "",
    logo: "",
    image: "/assets/portfolio.png",
    tags: [
      {
        id: 1,
        name: "Framer Motion",
        path: "/assets/logos/framer-motion.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Threejs",
        path: "/assets/logos/threejs.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
{
    id: 3,
    LinkToWeb: "", // Add your live link here if available
    title: "ProjectTeams",
    description:
      "A full stack platform to create/join project teams for various projects and collaborate effectively.",
    subDescription: [
      "Engineered a robust team management system allowing users to create organizations, invite members via email, and assign granular roles (Admin, Editor, Viewer).",
      "Implemented secure user authentication and authorization using JSON Web Tokens (JWT) and OTP verification to ensure data privacy.",
      "Developed real-time collaboration features, including live chat and instant notifications, utilizing Socket.io to keep remote teams synchronized.",
      "Designed a scalable RESTful API with Node.js and Express to handle complex relationships between users, teams, and projects efficiently.",
      "Utilized MongoDB aggregation pipelines to generate insightful project analytics and track team progress in real-time."
    ],
    href: "",
    logo: "",
    image: "/assets/projectteams.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/nodejs.svg",
      },
      {
        id: 3,
        name: "Express.js",
        path: "/assets/expressjs.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/MongoDB.svg",
      },
    ],  
  }

];