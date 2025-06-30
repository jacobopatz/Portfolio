
import React from 'react';
import { AnimatePresence, motion } from "motion/react";
import { projects } from './data/projectsData';
import styles from './Projects.module.css';
import NavButton from '../../components/NavButton/NavButton';
import ContactCard from '../../components/ContactCard/ContactCard';
import Layout from '../../components/Layout/Layout';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: "100vh", opacity: 0 },
  show: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.7 } },
  exit: { x: "-100vw", opacity: 0, transition: { ease: "easeIn", duration: 0.5 } },
};
function Projects() {
  return (
   <Layout>
     <div className={styles.projectContainer}>
       { projects.map((project,index) =>(
            <motion.div className={styles.sizingContainer}key={index}variants={itemVariants} >
             <ProjectCard key={index} {...project} />
             </motion.div>
           ))}
           <div className={styles.whiteSpace}></div>
    </div>
    </Layout>
    

    // <NavButton to="/projects" buttonText="Projects" />
  );
}

export default Projects;


