import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../PortfolioIntro/PortfolioIntro.module.css";
import { Link } from "react-router-dom";
import { projects } from "../../../Data/Data";

const PortfolioIntro = () => {
  return (
    <Container
      className={`my-4 py-4 text-center mx-auto ${styles.PortfolioIntroSection}`}
    >
      <h2 className="text-center pt-3 ">Recent Works</h2>
      <div className="underline my-3"></div>

      <Row xs="1" sm="1" md="2" lg="3" className="py-3 mx-auto ">
        {projects.slice(0, 3).map((project) => {
          return (
            <Col key={project.id}>
              <div className={`soft-light-shadow my-3 py-3 ${styles.Card}`}>
                <div className={styles.cardImage}>
                  <img src={project.image} alt="projectImg" />
                </div>
                <div className={`pt-4 py-2 ${styles.cardBody}`}>
                  <h5 className="text-bold">{project.title}</h5>
                  <h6>{project.subTitle}</h6>
                  <div className={styles.underline}></div>
                  <p>{project.desc}</p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <Link
        to="portfolio"
        className={`text-center btn soft-light-shadow soft-btn ${styles.link}`}
      >
        More Works...
      </Link>
    </Container>
  );
};

export default PortfolioIntro;
