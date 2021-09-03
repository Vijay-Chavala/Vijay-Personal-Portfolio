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
      <h2 className="text-center py-3">Recent Works</h2>
      <Row xs="1" md="3" lg="3" className="py-3  ">
        {projects.slice(1, 4).map((project) => {
          return (
            <Col key={project.id}>
              <div className={`soft-light-shadow py-3 ${styles.Card}`}>
                <div className={styles.cardImage}>
                  <img src={project.image} alt="projectImg" />
                </div>
                <div className={`py-2 ${styles.cardBody}`}>
                  <h5>{project.title}</h5>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis atque aperiam eius commodi et tenetur excepturi sed
                    totam pariatur, saepe quidem velit ratione esse ullam illum
                    magni quo, suscipit nemo.
                  </p>
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
