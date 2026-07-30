import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../Services/Services.module.css";
import { services } from "../../Data/Data";
import Reveal from "../common/Reveal";

const Services = () => {
  return (
    <Container className="pb-5 bgHeight">
      <Reveal className="text-center mt-5 headingContent">
        <h6>Services</h6>
        <h2>What I do</h2>
        <div className="underline"></div>
      </Reveal>
      <Row xs="1" sm="1" md="2" lg="3" className="">
        {services.map((service, index) => {
          return (
            <Col key={service.id} className="px-4  ">
              <Reveal className={styles.Card} delay={(index % 3) * 110}>
                <div className={styles.cardIcon}>
                  <i
                    className={`${service.icon} text-center ${styles.icon} `}
                  ></i>
                </div>
                <div className={styles.cardBody}>
                  <h3>{service.title}</h3>
                  <p>{service.info}</p>
                </div>
              </Reveal>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Services;
