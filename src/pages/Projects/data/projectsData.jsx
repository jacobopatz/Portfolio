
import gradientImg from './sdsu.png'
import portfolio from './portfolio.png'
import healthcareImg from './healthcare.png'
import neuralNetworksImg from './neuralNetworks.png'
import inactivityImg from'./inactivity.png'
import fallImg from './fall.png'
// data/projects.js
export const projects = [
  {
    title: "Portfolio Website",
    date: "October 2024",
    description: "This website right here! Developed from scratch with react and framer motion for the" + 
    " animations. ",
    image: portfolio,
    link: "https://google.com",
  },
  {
    title: "Neural Networks Research",
     date: "October 2024",
    description: "Collaborated on training and optimization of YOLO and RT-DETR models using data from SDSUs S.T.A.R. Lab, supporting research efforts to reduce vehicle collisions through neural network-based collision detection and data analysis.",
    image: neuralNetworksImg,
    link: "https://google.com",
  },
   {
    title: "Healthcare Portal",
     date: "December 2025",
    description: "Led a team in a simulated agile software development cycle, producing a full stack django web-application. The application functions as the interface for theoretical hospital staf. Personally, I was respobsible for the physician scheduler module and the apps UI.",
    image: healthcareImg,
    link: "https://google.com",
  },
   {
    title: "Inactivity Monitoring System",
     date: "May 2025",
    description: "Led a team in developing a Raspberry Pi-based system that used computer vision to detect prolonged bed usage during waking hours, transmitting activity data to a custom web dashboard via a Flask backend and React frontend, empowering users to monitor daily rest habits.",
    image: inactivityImg,
    link: "https://google.com",
    
  },
   {
    title: "Fall Detection System",
     date: "May 2025",
    description: "Led a team in the development of a rasberry pi based system that utilized an IMU sensor to detect a fall and send a request to a django webapp that alerted family members and updated a web dashboard in real time.",
    image: fallImg,
    link: "https://google.com",
    
  },
  // Add more projects...
];