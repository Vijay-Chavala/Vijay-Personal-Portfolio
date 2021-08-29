import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import styles from "../Contact/Contact.module.css";

const Contact = () => {
  return (
    <Container className={` ${styles.contactSection}`}>
      <div className="text-center mt-5 headingContent">
        <h6>Contact Me</h6>
        <h2>Ways to contact</h2>
        <div className="underline"></div>
      </div>
      <Row>
        <Col sm="12" md="6" lg="6" className="mx-auto">
          <Form autocomplete="off">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="email" placeholder="Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="please enter email"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} required />
            </Form.Group>
            <button type="submit" className="soft-light-shadow btn soft-btn">
              Submit
            </button>
          </Form>
          <div className={` ${styles.contactIcons}`}>
            <a href="mailto:vijayychavala@gmail.com">
              <i className="fa fa-envelope" aria-hidden></i>
            </a>
            <a href="tel:+917661009190">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </a>
            <a target="_blank" href="https://wa.link/6aytkz" rel="noreferrer">
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
