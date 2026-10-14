import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ProjectList.module.css";
import { projects } from "../../Data/Data";
import Reveal from "../common/Reveal";
import ProjectCard, { CATEGORY_LABELS } from "./ProjectCard";

// Categories in first-seen order, each with how many projects it holds.
const categories = [
  { key: "all", count: projects.length },
  ...[...new Set(projects.map((project) => project.category))].map((key) => ({
    key,
    count: projects.filter((project) => project.category === key).length,
  })),
];

const ProjectList = () => {
  const [active, setActive] = useState("all");

  // Derived rather than stored, so the list can never disagree with the
  // selected filter.
  const visible =
    active === "all" ? projects : projects.filter((project) => project.category === active);

  return (
    <Container className="bgHeight pb-5">
      <Reveal className="headingContent">
        <h6>Projects</h6>
        <h2>Things I've built</h2>
        <div className="underline"></div>
      </Reveal>

      <Reveal className={styles.filters} delay={80} role="group" aria-label="Filter projects">
        {categories.map(({ key, count }) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key)}
            aria-pressed={key === active}
            className={`${styles.categoryButton} ${key === active ? styles.btnActive : ""}`}
          >
            {CATEGORY_LABELS[key] ?? key}
            <span className={styles.count}>{count}</span>
          </button>
        ))}
      </Reveal>

      {/* Keyed on the filter so the grid remounts and every card re-plays its
          entrance, instead of cards silently popping in and out of place. */}
      <Row key={active} xs="1" md="2" lg="3" className="g-4">
        {visible.map((project, index) => (
          <Col key={project.id}>
            {/* Stagger across the row rather than the whole list, so the
                16th card is not waiting 1.4s behind the first. */}
            <Reveal className="h-100" delay={(index % 3) * 90}>
              <ProjectCard project={project} />
            </Reveal>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectList;
