import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../Services/Services.module.css";
import { services } from "../../Data/Data";

const Services = () => {
  return (
    <Container className="pb-5 bgHeight">
      <div className="text-center mt-5 headingContent">
        <h6>Services</h6>
        <h2>What I do</h2>
        <div className="underline"></div>
      </div>
      <Row xs="1" sm="1" md="2" lg="3" className="">
        {services.map((service) => {
          return (
            <Col key={service.id} className="px-4  ">
              <div className={styles.Card}>
                <div className={styles.cardIcon}>
                  <i
                    className={`${service.icon} text-center ${styles.icon} `}
                  ></i>
                </div>
                <div className={styles.cardBody}>
                  <h3>{service.title}</h3>
                  <p>{service.info}</p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Services;
