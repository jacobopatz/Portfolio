import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactButtons.module.css'; 
import LinkedIn from './linkedInIcon.png';
import EmailIcon from './EmailIcon.png';
import PhoneIcon from './PhoneIcon.png';
import GitHubIcon from './GitHubIcon.png'

const ContactButtons =({setShowDiv})=>  {
    return (
        <div className={styles.ButtonContainer}>
           
                {/* LinkedIn */}
                <a
                   
                    href="https://www.linkedin.com/in/jacob-opatz-20761a215/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                    src={ LinkedIn}
                    alt="LinkedIn"
                    />
                </a>
                {/* GitHub */}
                <a
                    
                    href="https://github.com/jacobopatz/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                    src={GitHubIcon}
                    alt="Link to my GitHub"
                    />
                </a>
           
                {/* Email */}
                <a
                     onMouseEnter={() => setShowDiv("Email")}
                    href="mailto:jacobopatz@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                    src={EmailIcon}
                    alt="jacobopatz@gmail.com"
                    />
                </a>
            
                {/* Phone */}
                <a
                     onMouseEnter={() => setShowDiv("Phone")}
                    href="tel:+12187701724"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                    src={PhoneIcon}
                    alt="(218) 770-1724"
                    />
                </a>
            
        
        </div>
        
    );
};

export default ContactButtons;