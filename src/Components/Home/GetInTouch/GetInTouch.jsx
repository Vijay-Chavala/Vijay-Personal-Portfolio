import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../GetInTouch/GetInTouch.module.css";
import { Link } from "react-router-dom";
import Contact from "./../../Contact/Contact";

const GetInTouch = () => {
  return (
    <Container className={`mb-3 ${styles.GetInTouchContainer}`}>
      <Row>
        <Col>
          <h2 className="text-center py-3">Get in touch</h2>
          <div className="soft-light-shadow-inset text-center py-5 px-5 ">
            <h5>Thanks for viewing my Portfolio.</h5>
            <h5>I really hope that you've enjoyed looking at my work!</h5>
            {/* <p>Feel free to contact if you like my works!</p> */}
            <Link
              to="contact"
              className={` btn soft-light-shadow soft-btn ${styles.link}`}
            >
              Contact
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GetInTouch;
