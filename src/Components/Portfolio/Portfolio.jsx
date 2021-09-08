import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../Portfolio/Portfolio.module.css";
import { projects } from "../../Data/Data";
import { Link } from "react-router-dom";
// ******Filtering Categories********
const allCategories = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];
const Portfolio = () => {
  const [myProjects, setMyProjects] = useState(projects);
  const [active, setActive] = useState(0);

  const filterProjects = (category, i) => {
    if (category === "all") {
      setMyProjects(projects);
      setActive(i);

      return;
    }
    const newProjects = projects.filter(
      (project) => project.category === category
    );
    setMyProjects(newProjects);
    setActive(i);
  };
  // ******End oF Filtering Categories********

  // ******Sending Id Data to Projects Component********

  // ******End of Sending Id Data to Projects Component********

  return (
    <Container className="bgHeight pb-5">
      <div className="text-center mt-5 headingContent">
        <h6>Projects</h6>
        <h2>Look at my projects</h2>
        <div className="underline"></div>
      </div>
      <div className="text-center pt-3">
        {allCategories.map((project, index) => {
          return (
            <button
              key={index}
              onClick={() => filterProjects(project, index)}
              className={`btn me-3  ${styles.categoryButtons} ${
                index === active ? styles.btnActive : ""
              }`}
            >
              {project}
            </button>
          );
        })}
      </div>
      <Row xs="1" md="2" lg="3" className="">
        {myProjects.map((project) => {
          return (
            <Col
              as={Link}
              to={`projects/${project.id}`}
              key={project.id}
              className={`pe-4 ${styles.Link}`}
            >
              <div className={styles.Card}>
                <div className={styles.cardImage}>
                  <img src={project.image} alt="projectImg" />
                </div>
                <div className={styles.cardBody}>
                  <h4>{project.title}</h4>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Portfolio;
