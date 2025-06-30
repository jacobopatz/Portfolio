import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';
import { motion } from "motion/react";
import NavButton from '../NavButton/NavButton';


const ProjectCard = ({ title, date, description, image, link }) => {
    return (
        <div className={styles.ProjectCardContainer} >
            <div className={styles.imageContainer}>
                <img src={image} />
                
            </div>
            <div className={styles.backgroundContainer}>
                
                <div className={styles.projectTitle}>
                    <p>{title}</p>
                </div>
                <div className={styles.projectDate}>
                    <p>{date}</p>
                </div>
                <div className={styles.projectDescription}>
                    <p>{description}</p>
                </div>

                <div className={styles.projectLink}>
                    <NavButton to={link} buttonText={"to project"}></NavButton>
                </div>
            </div>

        </div>
    );
};
export default ProjectCard;