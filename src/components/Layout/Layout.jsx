
import React, { useState } from 'react';
import { AnimatePresence, motion } from "motion/react";

import styles from './Layout.module.css';
import NavButton from '../../components/NavButton/NavButton';
import ContactCard from '../../components/ContactCard/ContactCard';
import Header from '../../components/Header/Header';
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
const Layout = ({ children }) => {
  
  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftContainer}>
        <Header></Header>
       
        <motion.div className={styles.cardContainer} variants={containerVariants}
      initial="hidden"
      animate="show">
        <AnimatePresence>
          {children}
           </AnimatePresence>
        </motion.div>
        

        
        </div>

      <div className={styles.aboutContainer}>
            <ContactCard></ContactCard>
        </div>

    </div>
    

    // <NavButton to="/projects" buttonText="Projects" />
  );
}

export default Layout;
