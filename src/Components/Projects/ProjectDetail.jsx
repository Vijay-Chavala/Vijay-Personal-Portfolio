import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../Data/Data";
import styles from "./ProjectDetail.module.css";
import Reveal from "../common/Reveal";
import { CATEGORY_LABELS } from "./ProjectCard";

const ProjectDetail = () => {
  const { id } = useParams();

  // Derived from the URL rather than held in state, so navigating straight
  // from one project to another re-renders with the right one. React Router
  // reuses this component across param changes, it does not remount it.
  const index = projects.findIndex((data) => data.id === Number(id));
  const project = projects[index];

  if (!project) {
    return (
      <Container className="bgHeight pb-5">
        <div className="headingContent">
          <h6>Projects</h6>
          <h2>Project not found</h2>
          <div className="underline"></div>
        </div>
        <div className="text-center mt-5">
          <p>That project doesn't exist or has been removed.</p>
          <Link to="/projects" className="soft-light-shadow btn soft-btn mt-3">
            <i className="bi bi-arrow-left" aria-hidden="true"></i> Back to all projects
          </Link>
        </div>
      </Container>
    );
  }

  // Wraps around, so the last project leads back to the first.
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const liveLabel = project.category === "design" ? "View design" : "Live website";

  const projectImage = (
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      className={styles.projectImage}
    />
  );

  return (
    <Container className="bgHeight pb-5">
      <Reveal className={styles.topBar}>
        <Link to="/projects" className={styles.backLink}>
          <i className="bi bi-arrow-left" aria-hidden="true"></i> All projects
        </Link>
      </Reveal>

      <Reveal className={styles.header} delay={60}>
        <span className={styles.category}>
          {CATEGORY_LABELS[project.category] ?? project.category}
        </span>
        <h1 className={styles.title}>{project.title}</h1>
        {project.subTitle && <p className={styles.subTitle}>{project.subTitle}</p>}
      </Reveal>

      {/* Browser-style frame. Tall screenshots scroll inside it on hover so
          the whole page can be previewed without leaving the site. */}
      <Reveal variant="scale" delay={120} className={styles.frame}>
        <div className={styles.frameBar} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        {/* Only link the screenshot when there is somewhere to go —
            an empty href just reloads the current page. */}
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className={styles.viewport}
            aria-label={`${liveLabel}: ${project.title} (opens in a new tab)`}
          >
            {projectImage}
          </a>
        ) : (
          <div className={styles.viewport}>{projectImage}</div>
        )}
      </Reveal>

      <Row className="g-4 mt-2">
        <Col lg="8">
          <Reveal className={styles.panel}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <p className={styles.desc}>{project.desc}</p>

            {project.features && (
              <>
                <h2 className={styles.sectionTitle}>Key features</h2>
                <ul className={styles.featuresList}>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </>
            )}

            {project.contributions && (
              <>
                <h2 className={styles.sectionTitle}>My contributions</h2>
                <ul className={styles.contributionsList}>
                  {project.contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>
              </>
            )}
          </Reveal>
        </Col>

        <Col lg="4">
          <Reveal variant="right" delay={100} className={`${styles.panel} ${styles.aside}`}>
            {project.tags && (
              <>
                <h2 className={styles.sectionTitle}>Built with</h2>
                <ul className={styles.tools}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </>
            )}

            {(project.link || project.gitHubLink) && (
              <div className={styles.buttons}>
                {project.link && (
                  <a
                    href={project.link}
                    className="soft-light-shadow btn soft-btn btnPrimary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {liveLabel} <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
                  </a>
                )}
                {project.gitHubLink && (
                  <a
                    href={project.gitHubLink}
                    className="soft-light-shadow btn soft-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-github" aria-hidden="true"></i> Source code
                  </a>
                )}
              </div>
            )}
          </Reveal>
        </Col>
      </Row>

      <Reveal as="nav" className={styles.pager} aria-label="More projects">
        <Link to={`/projects/${prev.id}`} className={`hoverCard ${styles.pagerLink}`}>
          <span className={`hoverSurface ${styles.pagerSurface}`}>
            <small>
              <i className="bi bi-arrow-left" aria-hidden="true"></i> Previous
            </small>
            <span>{prev.title}</span>
          </span>
        </Link>
        <Link
          to={`/projects/${next.id}`}
          className={`hoverCard ${styles.pagerLink} ${styles.pagerNext}`}
        >
          <span className={`hoverSurface ${styles.pagerSurface}`}>
            <small>
              Next <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </small>
            <span>{next.title}</span>
          </span>
        </Link>
      </Reveal>
    </Container>
  );
};

export default ProjectDetail;
