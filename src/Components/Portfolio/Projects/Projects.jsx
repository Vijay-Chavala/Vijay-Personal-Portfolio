import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { projects } from "../../../Data/Data";
import styles from "../Projects/Projects.module.css";

const Projects = () => {
  const [projectData, setProjectData] = useState(projects);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    projectData.filter((data) => console.log(data.category === "react"));
    const newData = projectData.filter((data) => data.id === parseInt(id));
    console.log(newData);
    setProjectData(newData);
  }, []);

  return (
    <Container className="bgHeight pb-5">
      <div className="text-center mt-5 headingContent">
        <h6>Projects</h6>
        <h2>What I do</h2>
        <div className="underline"></div>
      </div>

      <div className={styles.projectInfoSection}>
        {projectData.map((project) => {
          return (
            <Row>
              {project.id}
              <Col>
                <div className={styles.projectImage}>
                  <img src={project.image} alt="project_image " />
                </div>
              </Col>
              <div className="">{project.title}</div>
              <div className="">{project.desc}</div>
            </Row>
          );
        })}
      </div>
    </Container>
  );
};

export default Projects;
