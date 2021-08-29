import React from "react";
import bannerImg from "../../assets/undraw_career_progress_ivdb.svg";
import styles from "../Home/Home.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container className={` ${styles.homeContainer}`}>
      <Row>
        <Col sm="12" md="6" className="">
          <div className={`mt-5 ${styles.homeContent}`}>
            <h5 className="">Hello</h5>
            <h1 className="my-3">I'm Vijay Kumar</h1>
            <h5 className="mb-3">Web Designer and Developer</h5>
            <Link to="/about" className="soft-light-shadow btn soft-btn py-2">
              More About Me
            </Link>
          </div>
        </Col>
        <Col sm="12" md="6">
          <div className={styles.imgContainer}>
            <img src={bannerImg} alt="career" className={styles.homeImg} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
