// data/projects.js
import gradientImg from './sdsu.png';
import portfolio from './portfolio.png';
import healthcareImg from './healthcare.png';
import neuralNetworksImg from './neuralNetworks.png';
import inactivityImg from './inactivity.png';
import fallImg from './fall.png';

export const projects = [
  {
    title: "Portfolio Website",
    date: "October 2024",
    description:
      "This website right here! Developed from scratch with React and Framer Motion for the animations.",
    image: portfolio,
    links: [
      { href: "https://portfolio-xi-peach-85.vercel.app/", label: "View Live Site" },
      { href: "https://github.com/jacobopatz/Portfolio", label: "View GitHub" },
    ],
  },
  {
    title: "Neural Networks Research",
    date: "October 2024",
    description:
      "Collaborated on training and optimization of YOLO and RT-DETR models using data from SDSU’s S.T.A.R. Lab, supporting research efforts to reduce vehicle collisions through neural network-based collision detection and data analysis.",
    image: neuralNetworksImg,
    links: [
      { href: "https://drive.google.com/file/d/1Aur5de2IFecQqCOJHD-BgzgaY2hTBJqn/view?usp=sharing", label: "View Report" },
      
    ],
  },
  {
    title: "Healthcare Portal",
    date: "December 2025",
    description:
      "Led a team in a simulated agile software development cycle, producing a full-stack Django web application. The application functions as the interface for theoretical hospital staff. I was responsible for the physician scheduler module and the app's UI.",
    image: healthcareImg,
    links: [
      { href: "https://healthcare-portal-zkt4.onrender.com", label: "View Live Demo" },
      { href: "https://github.com/jacobopatz/Healthcare-Portal", label: "View GitHub" },
    ],
  },
  {
    title: "Inactivity Monitoring System",
    date: "May 2025",
    description:
      "Led a team in developing a Raspberry Pi–based system that used computer vision to detect prolonged bed usage during waking hours, transmitting activity data to a custom web dashboard via a Flask backend and React frontend.",
    image: inactivityImg,
    links: [
      { href: "https://github.com/jacobopatz/Inactivity-Monitoring-System/tree/main", label: "GitHub" },
      { href: "https://inactivity-monitoring-system-5bb04shjo-jacob-opatzs-projects.vercel.app/", label: "Live Site" },
    ],
  },
  {
    title: "Fall Detection System",
    date: "May 2025",
    description:
      "Led a team in the development of a Raspberry Pi–based system that utilized an IMU sensor to detect a fall and send a request to a Django web app that alerted family members and updated a web dashboard in real time.",
    image: fallImg,
    links: [
      { href: "https://github.com/yourproject", label: "GitHub" },
     
    ],
  },
];
