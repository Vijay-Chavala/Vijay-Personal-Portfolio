import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import styles from "../Contact/Contact.module.css";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_0tmbdpf",
        e.target,
        "user_0oYxQ6veRJeBj7a9Ycqhd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <Container className={` ${styles.contactSection}`}>
      <div className="text-center mt-5 headingContent">
        <h6>Contact Me</h6>
        <h2>Ways to contact</h2>
        <div className="underline"></div>
      </div>
      <Row>
        <Col sm="12" md="6" lg="6" className={`mx-auto ${styles.col1}`}>
          <Form autoComplete="off" onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={styles.label}>Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="Name"
                name="name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={styles.label}>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="please enter email"
                name="email"
                required
                className={styles.input}
              />
            </Form.Group>

            <Form.Group
              className=" mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className={styles.label}>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                required
                className={styles.input}
                name="message"
              />
            </Form.Group>
            <button type="submit" className="soft-light-shadow btn soft-btn">
              Submit
            </button>
          </Form>
        </Col>
        <Col>
          <div className={` ${styles.contactIcons}`}>
            <ul className={styles.sidebar}>
              <li className={styles.navItem}>
                <a href="tel:+917660061579" className={styles.navLink}>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span className={styles.title}>+917660061579</span>
                </a>
              </li>
              <li className={styles.navItem}>
                <a
                  href="mailto:vijayychavala@gmail.com"
                  className={styles.navLink}
                >
                  <i className="fa fa-envelope" aria-hidden></i>
                  <span className={styles.title}>vijayychavala@gmail.com</span>
                </a>
              </li>
              <li className={styles.navItem}>
                <a
                  target="_blank"
                  href="https://wa.link/p5bfyy"
                  rel="noreferrer"
                  className={styles.navLink}
                >
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                  <span className={styles.title}>+917660061579</span>
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
