import styles from './ProjectCard.module.css';
import { LinkButton } from '../NavButton/NavButton';
const ProjectCard = ({ title, date, description, image, links = [] }) => {
  return (
    <div className={styles.ProjectCardContainer}>
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
        <div className={styles.buttonWrapper}>
  {links.slice(0, 2).map((link, index) => (
    <LinkButton
      key={index}
      to={link.href}
      buttonText={link.label}
    />
  ))}
  </div>
</div>
      </div>
    </div>
  );
};
export default ProjectCard;