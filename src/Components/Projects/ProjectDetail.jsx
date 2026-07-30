import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../Data/Data";
import styles from "./ProjectDetail.module.css";

const ProjectDetail = () => {
  const { id } = useParams();

  // Derived from the URL rather than held in state, so navigating straight
  // from one project to another re-renders with the right one. React Router
  // reuses this component across param changes, it does not remount it.
  const project = projects.find((data) => data.id === Number(id));

  if (!project) {
    return (
      <Container className="bgHeight pb-5">
        <div className="text-center mt-5 headingContent">
          <h6>Projects</h6>
          <h2>Project not found</h2>
          <div className="underline"></div>
        </div>
        <div className="text-center mt-5">
          <p>That project doesn't exist or has been removed.</p>
          <Link to="/projects" className="soft-light-shadow btn soft-btn mt-3">
            Back to all projects
          </Link>
        </div>
      </Container>
    );
  }

  const projectImage = (
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      className={styles.projectImage}
    />
  );

  return (
    <Container className="bgHeight pb-5">
      <div className="text-center mt-5 headingContent">
        <h6>Projects</h6>
        <h2>Look at my projects</h2>
        <div className="underline"></div>
      </div>

      <div className={`mt-5 ${styles.projectInfoSection}`}>
        <div>
          <Row>
            <div className={` mt-3 mb-5 ${styles.projectImageContainer}`}>
              {/* Only link the screenshot when there is somewhere to go —
                  an empty href just reloads the current page. */}
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.projectImageLink}
                >
                  {projectImage}
                </a>
              ) : (
                projectImage
              )}
            </div>
          </Row>
          <Row className={`p-3 ${styles.projectDetails}`}>
            <Col sm="12" md="11" className="mx-auto">
              <div className={`p-3  ${styles.projectDetailsDescription}`}>
                <h4 className="text-center">Project Details</h4>
                <h5>{project.title}</h5>
                <h6>{project.subTitle}</h6>
                <p>Category: {project.category}</p>
                <p>{project.desc}</p>

                {/* Technologies Used */}
                {project.tags && (
                  <div className="mt-4">
                    <h5>Technologies Used</h5>
                    <div className={styles.projectDetailsTools}>
                      {project.tags.map((tag) => (
                        <div key={tag}>
                          <p>{tag}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Features Section */}
                {project.features && (
                  <div className="mt-4">
                    <h5>Key Features</h5>
                    <ul className={styles.featuresList}>
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Contributions Section */}
                {project.contributions && (
                  <div className="mt-4">
                    <h5>My Contributions</h5>
                    <ul className={styles.contributionsList}>
                      {project.contributions.map((contribution) => (
                        <li key={contribution}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className={`mt-4  ${styles.buttons}`}>
                {project.link && (
                  <a
                    href={project.link}
                    className="soft-light-shadow btn soft-btn me-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.category === "design"
                      ? "View Design"
                      : "Live Website"}
                  </a>
                )}

                {project.gitHubLink && (
                  <a
                    href={project.gitHubLink}
                    className="soft-light-shadow btn soft-btn me-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-github" aria-hidden="true"></i> Github
                    Code
                  </a>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default ProjectDetail;
