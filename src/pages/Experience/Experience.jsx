
import React from 'react';
import { AnimatePresence, motion } from "motion/react";
import { ExperienceData } from './data/ExperienceData.jsx';
import styles from './Experience.module.css';
import NavButton from '../../components/NavButton/NavButton';
import ContactCard from '../../components/ContactCard/ContactCard';
import Header from '../../components/Header/Header';
import ContentCard from '../../components/ContentCard/ContentCard';
import Layout from '../../components/Layout/Layout';


const itemVariants = {
  hidden: { y: "100vh", opacity: 0 },
  show: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.7 } },
  exit: { x: "-100vw", opacity: 0, transition: { ease: "easeIn", duration: 0.5 } },
};
function Experience() {
  return (
    <Layout>
      <div className={styles.experienceContainer}>
      {ExperienceData.map((exp, index) => (
        <motion.div key={index} variants={itemVariants} className={styles.cardWrapper}>
          <ContentCard {...exp} />
        </motion.div>
      ))}
      </div>
    </Layout>


    // <NavButton to="/projects" buttonText="Projects" />
  );
}

export default Experience;
