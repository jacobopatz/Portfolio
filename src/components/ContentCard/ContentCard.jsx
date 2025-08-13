import { style } from "motion/react";
import styles from "./ContentCard.module.css";
import { Link, useLocation } from 'react-router-dom';
import { LinkButton } from "../NavButton/NavButton";
const ContentCard = ({ image, title, university, years, description, link }) => {
    const location = useLocation();
    return (
        <div className={styles.cardContainer}>

            <div className={styles.imageContainer}>

                <img src={image} alt={'SDSU hepnerhall'} />

            </div>
            <div className={styles.backgroundContainer}></div>
            <div className={styles.textContainer} >
                <div className={styles.titleContainer}>
                    <h1>{title}</h1>
                    <div className={styles.universityContainer}>
                        {((location.pathname) == '/education') && (<h2>Minor in Mathematics</h2>)}

                        <h2>{university}</h2>
                    </div>
                </div>

                <div className={styles.yearsContainer}>
                    <h3>{years}</h3>
                </div>
                <div className={styles.descriptionContainer}>
                    <p>{description}</p>
                </div>
                <div className={styles.linkContainer}>
                     <LinkButton
                          to={link.href}
                          buttonText={link.label}
                        />
                    
                </div>
            </div>






        </div>
    );
};

export default ContentCard;