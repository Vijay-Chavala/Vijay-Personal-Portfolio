import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ProjectList.module.css";
import { projects } from "../../Data/Data";
import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";
// ******Filtering Categories********
const allCategories = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];
const ProjectList = () => {
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
      <Reveal className="text-center mt-5 headingContent">
        <h6>Projects</h6>
        <h2>Look at my projects</h2>
        <div className="underline"></div>
      </Reveal>
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
      <Row xs="1" md="2" lg="3" className="mx-auto">
        {myProjects.map((project, index) => {
          return (
            <Col
              as={Link}
              to={`/projects/${project.id}`}
              key={project.id}
              className={` mx-auto ${styles.Link}`}
            >
              {/* Stagger across the row rather than the whole list, so the
                  16th card is not waiting 1.4s behind the first. */}
              <Reveal className={styles.Card} delay={(index % 3) * 90}>
                <div
                  className={styles.cardImage}
                  style={{
                    height: project.category === "design" ? "255px" : "200px",
                  }}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={styles.cardBody}>
                  <h4>{project.title}</h4>
                  <h6>{project.subTitle}</h6>
                </div>
              </Reveal>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProjectList;
