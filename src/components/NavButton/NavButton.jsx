import React from 'react';
import { motion } from "motion/react";
import { Link, useLocation } from 'react-router-dom';
import styles from './NavButton.module.css'; 
import buttonImage from './button.png';

const NavButton = ({ to, buttonText }) => {
  const location = useLocation();
  const isCurrentPage = (location.pathname === to);  // Use === instead of ==

  const content = (
    <motion.div
      layout
      layoutId={buttonText}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className={`${styles.buttonWrapper} ${styles.navButton}`}
    >
      <Link to={to} className={styles.buttonLink}>
        <img src={buttonImage} className={styles.buttonImage} />
        <span className={styles.buttonText}>{buttonText}</span>
      </Link>
    </motion.div>
  );

  return isCurrentPage ? (
    <div className={styles.activeLink}>{content}</div>
  ) : (
    content
  );
};

export const LinkButton = ({ to, buttonText }) => {
  return (
    <motion.div className={styles.buttonWrapper}>
      <a
        href={to}
        className={`${styles.buttonWrapper} ${styles.linkButton}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.buttonLink}></div>
        <img src={buttonImage} className={styles.buttonImage} alt="" />
        <span className={styles.buttonText}>{buttonText}</span>
        <div className={styles.buttonLink}></div>
      </a>
    </motion.div>
  );
};

export default NavButton;
