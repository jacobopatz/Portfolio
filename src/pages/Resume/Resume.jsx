
import React from 'react';
import { AnimatePresence, motion } from "motion/react";

import styles from './Resume.module.css';
import NavButton from '../../components/NavButton/NavButton';
import ContactCard from '../../components/ContactCard/ContactCard';
import Header from '../../components/Header/Header';
import ContentCard from '../../components/ContentCard/ContentCard';
import Layout from '../../components/Layout/Layout';
import resumePdf from './data/Jacob-Opatz-Developer-Resume.pdf'
import ResumeImg from './data/resume.png'
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
function Resume() {
  return (
    <Layout>
      <motion.div variants={itemVariants} className={styles.resumeContainer}>
   
        <img src={ResumeImg}/>


      </motion.div>
    </Layout>
    

    // <NavButton to="/projects" buttonText="Projects" />
  );
}

export default Resume;
