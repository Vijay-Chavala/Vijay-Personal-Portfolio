import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

// Category keys in Data.js are ids ("nextjs", "HTML CSS JS"); these are the
// labels a visitor should read.
export const CATEGORY_LABELS = {
  all: "All",
  react: "React",
  nextjs: "Next.js",
  "HTML CSS JS": "HTML / CSS / JS",
  design: "UI Design",
};

/**
 * One project tile, shared by the home page's Recent Works and the full
 * Projects list so the two can never drift apart visually.
 *
 * `showDesc` adds the clamped description — the home page has room to sell
 * three projects; the list page stays scannable with title, subtitle, tags.
 */
const ProjectCard = ({ project, showDesc = false }) => (
  <Link to={`/projects/${project.id}`} className={`hoverCard ${styles.card}`}>
    <div className={`hoverSurface ${styles.surface}`}>
      <div className={styles.media}>
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          decoding="async"
        />
        <span className={styles.category}>
          {CATEGORY_LABELS[project.category] ?? project.category}
        </span>
        <span className={styles.overlay} aria-hidden="true">
          <span className={styles.overlayBtn}>
            View details <i className="bi bi-arrow-right"></i>
          </span>
        </span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        {project.subTitle && <p className={styles.subTitle}>{project.subTitle}</p>}
        {showDesc && <p className={styles.desc}>{project.desc}</p>}
        {project.tags?.length > 0 && (
          <ul className={styles.tags}>
            {project.tags.slice(0, 3).map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
            {project.tags.length > 3 && (
              <li className={styles.more}>+{project.tags.length - 3}</li>
            )}
          </ul>
        )}
      </div>
    </div>
  </Link>
);

export default ProjectCard;
