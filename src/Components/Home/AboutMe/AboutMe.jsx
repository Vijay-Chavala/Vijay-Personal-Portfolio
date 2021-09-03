import React from "react";
import aboutMe from "../../../assets/aboutMe.svg";
import { Link } from "react-router-dom";

import styles from "../AboutMe/AboutMe.module.css";
import { Col, Container, Row } from "react-bootstrap";

const AboutMe = () => {
  return (
    <Container className={` ${styles.aboutContainer}`}>
      <h2 className="text-center my-5">About Me </h2> 
      <Row className="">
        <Col sm="12" md="6" className=" ">
          <div className="">
            <img
              src={aboutMe}
              alt="about me"
              className={`${styles.aboutMeImage}`}
            />
          </div>
        </Col>
        <Col sm="12" md="6" className="">
          <div className={`${styles.aboutMeContent}`}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              quidem odio dignissimos illum tempora maxime adipisci, reiciendis
              quidem odio dignissimos illum tempora maxime adipisci, reiciendis
              quidem odio dignissimos illum tempora maxime adipisci, reiciendis
              officia quo autem officiis repellendus ducimus dolor sint,
              excepturi quam repellat error consectetur.
            </p>
            <div className="btn-group">
              <Link
                to="/services"
                className={`soft-light-shadow btn soft-btn mt-4 ${styles.linkBtn}`}
              >
                Services
              </Link>
              <Link
                to="/about"
                className={`soft-light-shadow btn soft-btn mt-4 ${styles.linkBtn}`}
              >
                More About Me
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
