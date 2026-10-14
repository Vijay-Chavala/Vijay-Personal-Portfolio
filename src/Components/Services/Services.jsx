import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../Services/Services.module.css";
import { services } from "../../Data/Data";
import Reveal from "../common/Reveal";

const Services = () => {
  return (
    <Container className="pb-5 bgHeight">
      <Reveal className="headingContent">
        <h6>Services</h6>
        <h2>What I do</h2>
        <div className="underline"></div>
      </Reveal>
      {/* Four services: two per row on tablets, four across on wide screens.
          The old 3-column grid left the fourth card stranded on its own row. */}
      <Row xs="1" md="2" xl="4" className="g-4 pt-5">
        {services.map((service, index) => (
          <Col key={service.id}>
            {/* Reveal only handles the entrance; hover is handled in place by
                .hoverCard / .hoverSurface (index.css). */}
            <Reveal className="h-100" delay={index * 100}>
              <div className={`hoverCard ${styles.cardHit}`}>
                <div className={`hoverSurface ${styles.Card}`}>
                  <div className={styles.cardIcon}>
                    <i className={service.icon} aria-hidden="true"></i>
                  </div>
                  <span className={styles.number} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.info}</p>
                </div>
              </div>
            </Reveal>
          </Col>
        ))}
      </Row>
      <Reveal className={styles.cta}>
        <p>Need something that isn't listed?</p>
        <Link to="/contact" className="soft-light-shadow btn soft-btn btnPrimary">
          Let's talk <i className="bi bi-arrow-right" aria-hidden="true"></i>
        </Link>
      </Reveal>
    </Container>
  );
};

export default Services;
