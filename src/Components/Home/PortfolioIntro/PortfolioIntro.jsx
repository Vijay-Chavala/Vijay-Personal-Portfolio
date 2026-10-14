import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../PortfolioIntro/PortfolioIntro.module.css";
import { Link } from "react-router-dom";
import { projects } from "../../../Data/Data";
import Reveal from "../../common/Reveal";
import ProjectCard from "../../Projects/ProjectCard";

const PortfolioIntro = () => {
  return (
    <Container className="section">
      <Reveal className="headingContent">
        <h6>Portfolio</h6>
        <h2>Recent Works</h2>
        <div className="underline"></div>
      </Reveal>

      <Row xs="1" md="2" lg="3" className="g-4">
        {projects.slice(0, 3).map((project, index) => (
          <Col key={project.id}>
            <Reveal className="h-100" delay={index * 110}>
              <ProjectCard project={project} showDesc />
            </Reveal>
          </Col>
        ))}
      </Row>
      <Reveal className="text-center">
        <Link to="/projects" className={`btn soft-light-shadow soft-btn ${styles.link}`}>
          View all projects <i className="bi bi-arrow-right" aria-hidden="true"></i>
        </Link>
      </Reveal>
    </Container>
  );
};

export default PortfolioIntro;
