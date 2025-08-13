import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import styles from './ContactCard.module.css';
import profilePhoto from './profilePhoto.png';
import ContactButtons from './ContactButtons/ContactButtons';

function ContactCard() {
    const [showDiv, setShowDiv] = useState(null);

    return (
        <motion.div
            layout
            className={styles.fullContainer}
            onMouseLeave={() => setShowDiv(null)}
        >
            <motion.div layout layoutId="ContactCard" className={styles.contactContainer}>
                <div className={styles.photoContainer}>
                    <img src={profilePhoto} className={styles.profilePhoto} />
                </div>

                <div className={styles.greetingContainer}>
                    <h2>Hi, I'm Jacob!</h2>
                </div>

                <div className={styles.aboutContainer}>
                    <p>
                        Nice to meet you! I recently graduated from San Diego State University with a Bachelor of Science
                        in Computer Science and a minor in Mathematics. I am a driven developer eager to apply
                        my skills to my career. I created this portfolio so you can get a better idea of who I am
                        and the skills I will bring to your team.
                    </p>
                </div>

                <div className={styles.socialsContainer}>
                    <ContactButtons setShowDiv={setShowDiv} />
                </div>
                {/* This wrapper allows the container to smoothly adjust height */}
                <motion.div layout >
                    <AnimatePresence mode="wait">
                        {showDiv && (
                            <motion.div
                                key={showDiv}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, height: '10vh', y: 0 }}
                                exit={{ opacity: 0, height: 0, y: 20 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className={styles.infoContainer}
                            >
                                <p>
                                    {showDiv === 'Email' && 'Jacobopatz@gmail.com'}
                                    {showDiv === 'Phone' && '(218) 770-1724'}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>


        </motion.div>
    );
}

export default ContactCard;
