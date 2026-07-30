import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../PortfolioIntro/PortfolioIntro.module.css";
import { Link } from "react-router-dom";
import { projects } from "../../../Data/Data";
import Reveal from "../../common/Reveal";

const PortfolioIntro = () => {
  return (
    <Container
      className={`my-4 py-4 text-center mx-auto ${styles.PortfolioIntroSection}`}
    >
      <Reveal>
        <h2 className="text-center pt-3 ">Recent Works</h2>
        <div className="underline my-3"></div>
      </Reveal>

      <Row xs="1" sm="1" md="2" lg="3" className="py-3 mx-auto ">
        {projects.slice(0, 3).map((project, index) => {
          return (
            <Reveal as={Col} key={project.id} delay={index * 110}>
              <div className={`soft-light-shadow my-3 py-3 ${styles.Card}`}>
                <div className={styles.cardImage}>
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={`py-2 ${styles.cardBody}`}>
                  <h5 className="text-bold">{project.title}</h5>
                  <h6>{project.subTitle}</h6>
                  <div className={styles.underline}></div>
                  <p>{project.desc}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </Row>
      <Reveal>
        <Link
          to="/projects"
          className={`text-center btn soft-light-shadow soft-btn ${styles.link}`}
        >
          More Works...
        </Link>
      </Reveal>
    </Container>
  );
};

export default PortfolioIntro;
