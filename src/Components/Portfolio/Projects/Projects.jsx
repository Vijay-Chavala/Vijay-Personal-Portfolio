import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { projects } from "../../../Data/Data";
import styles from "../Projects/Projects.module.css";

const Projects = () => {
  const [projectData, setProjectData] = useState(projects);
  const { id } = useParams();

  useEffect(() => {
    const newData = projectData.filter((data) => data.id === parseInt(id));
    setProjectData(newData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="bgHeight pb-5">
      <div className="text-center mt-5 headingContent">
        <h6>Projects</h6>
        <h2>Look at my projects</h2>
        <div className="underline"></div>
      </div>

      <div className={`mt-5 ${styles.projectInfoSection}`}>
        {projectData.map((project) => {
          return (
            <div key={project.id} className="">
              <Row>
                <div className={` mt-3 mb-5 ${styles.projectImageContainer}`}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.projectImageLink}
                  >
                    <img
                      src={project.image}
                      alt="project_image "
                      className={styles.projectImage}
                    />
                  </a>
                </div>
              </Row>
              <Row className={`p-3 ${styles.projectDetails}`}>
                <Col sm="12" md="11" className="mx-auto">
                  <div className={`p-3  ${styles.projectDetailsDescription}`}>
                    <h4 className="text-center">Project Details</h4>
                    <h5>{project.title}</h5>
                    <p>Category : {project.category}</p>
                    <p>{project.desc}</p>
                    <div className={` ${styles.projectDetailsTools}`}>
                      {project.tags.map((tag, index) => {
                        return (
                          <div key={index}>
                            <p>{tag}</p>
                          </div>
                        );
                      })}
                    </div>
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
                        <i className="fa fa-github" aria-hidden="true"></i>{" "}
                        Github Code
                      </a>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Projects;
