import React, { useState } from 'react';
import { Link ,useLocation } from 'react-router-dom';
import styles from './Header.module.css'; 
import buttonStyles from '../NavButton/NavButton.module.css'
import { motion } from "motion/react";
import NavButton from '../NavButton/NavButton'; 


function Header()  {
   
    return (
        <div className={styles.headerContainer}>
            <div className={styles.titleContainer}>
                <motion.h1  layout layoutId='myName'className={styles.myName} transition={{ duration: 0.7, ease: "easeOut" }}>Jacob Opatz</motion.h1>
                <h1 className={styles.seperator}>|</h1>
                <motion.h2 layout layoutId='myTitle'className={styles.myName} transition={{ duration: 0.7, ease: "easeOut" }}>Aspiring Software Developer</motion.h2>
            </div>
            <div className={styles.navContainer}>
                 <div className={styles.sizingContainer}>
                <NavButton to="/" buttonText="Home" />
                </div>
                <div className={styles.sizingContainer}>
                <NavButton to="/projects" buttonText="Projects" />
                </div>
                <div className={styles.sizingContainer}>
                <NavButton to="/education" buttonText="Education" />
                </div>
                <div className={styles.sizingContainer}>
                <NavButton to="/experience" buttonText="Experience" />
                </div>
                <div className={styles.sizingContainer}>
                <NavButton to="/resume" buttonText="Resume" />
                </div>

            </div>
        </div>
    );
};
export default Header;