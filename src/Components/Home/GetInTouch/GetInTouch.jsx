import React from "react";
import { Container } from "react-bootstrap";
import styles from "../GetInTouch/GetInTouch.module.css";
import { Link } from "react-router-dom";
import Reveal from "../../common/Reveal";

const GetInTouch = () => {
  return (
    <Container className={`section ${styles.GetInTouchContainer}`}>
      <Reveal variant="scale" className={`soft-light-shadow-inset ${styles.panel}`}>
        <span className={styles.orb} aria-hidden="true" />
        <span className={`${styles.orb} ${styles.orbTwo}`} aria-hidden="true" />
        <h6 className={styles.eyebrow}>Get in touch</h6>
        <h2 className={styles.title}>Have a project in mind?</h2>
        <p className={styles.lead}>
          Thanks for looking through my work. If you'd like to build something
          together — or just talk shop — I'd love to hear from you.
        </p>
        <Link to="/contact" className={`btn soft-light-shadow soft-btn btnPrimary ${styles.link}`}>
          Say hello <i className="bi bi-arrow-right" aria-hidden="true"></i>
        </Link>
      </Reveal>
    </Container>
  );
};

export default GetInTouch;
