import React from 'react';
import { motion } from "motion/react";
import styles from './Home.module.css';
import NavButton from '../../components/NavButton/NavButton';
import ContactCard from '../../components/ContactCard/ContactCard';

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
};

function Home() {
  return (
    <motion.div
      className={styles.pageContainer}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div className={styles.leftContainer}>
        <motion.div className={styles.headerContainer}>
          <motion.h1 layout layoutId='myName' variants={itemVariants}>Jacob Opatz</motion.h1>
          <motion.h2 layout layoutId='myTitle' variants={itemVariants}>Aspiring Software Developer</motion.h2>
        </motion.div>

        <motion.div className={styles.navContainer}>
          <motion.div className={styles.buttonRow}>
            <motion.div className={styles.buttonSize} variants={itemVariants}>
              <NavButton to="/projects" buttonText="Projects" />
            </motion.div>
           <motion.div className={styles.buttonSize} variants={itemVariants}>
              <NavButton to="/experience" buttonText="Experience" />
            </motion.div>
          </motion.div>

          <motion.div className={styles.buttonRow}>
            <motion.div className={styles.buttonSize} variants={itemVariants}>
              <NavButton to="/education" buttonText="Education" />
            </motion.div>
            <motion.div className={styles.buttonSize} variants={itemVariants}>
              <NavButton to="/resume" buttonText="Resume" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className={styles.rightContainer}>
        <motion.div className={styles.contactCardContainer} variants={itemVariants}>
          <ContactCard />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
