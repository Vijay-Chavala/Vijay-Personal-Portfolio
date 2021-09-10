import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import styles from "../Contact/Contact.module.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [phoneConnectionStatus, setPhoneConnectionStatus] = useState("");
  const [mailConnectionStatus, setMailConnectionStatus] = useState("");
  const [whatsppConnectionStatus, setWhatsappConnectionStatus] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setPhoneConnectionStatus("");
    }, 5000);
  }, [phoneConnectionStatus]);

  useEffect(() => {
    setTimeout(() => {
      setMailConnectionStatus("");
    }, 5000);
  }, [mailConnectionStatus]);

  useEffect(() => {
    setTimeout(() => {
      setWhatsappConnectionStatus("");
    }, 5000);
  }, [whatsppConnectionStatus]);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6o7cpgc",
        "template_0tmbdpf",
        e.target,
        "user_0oYxQ6veRJeBj7a9Ycqhd"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            alert("Message Sent Successfully..!");
          }
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
        <Col sm="12" md="12" lg="6" className={`mx-auto ${styles.col1}`}>
          <Form autoComplete="off" onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={styles.label}>Name</Form.Label>
              <Form.Control
                type="text"
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
              Send Message
            </button>
          </Form>
        </Col>
        <Col sm="12" md="12" lg="6">
          <div className={` ${styles.contactIcons}`}>
            <ul className={styles.sidebar}>
              <li
                className={styles.navItem}
                onClick={() =>
                  setPhoneConnectionStatus("Connecting to the Phone...")
                }
              >
                <a href="tel:+917660061579" className={styles.navLink}>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span className={styles.title}>
                    {phoneConnectionStatus
                      ? phoneConnectionStatus
                      : "+917660061579"}
                  </span>
                </a>
              </li>
              <li
                className={styles.navItem}
                onClick={() => setMailConnectionStatus("Opening mail...")}
              >
                <a
                  href="mailto:vijayychavala@gmail.com"
                  className={styles.navLink}
                >
                  <i className="fa fa-envelope" aria-hidden></i>
                  <span className={styles.title}>
                    {mailConnectionStatus
                      ? mailConnectionStatus
                      : "vijayychavala@gmail.com"}
                  </span>
                </a>
              </li>
              <li
                className={styles.navItem}
                onClick={() =>
                  setWhatsappConnectionStatus("Connecting to WhatsApp...")
                }
              >
                <a
                  target="_blank"
                  href="https://wa.link/p5bfyy"
                  rel="noreferrer"
                  className={styles.navLink}
                >
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                  <span className={styles.title}>
                    {whatsppConnectionStatus
                      ? whatsppConnectionStatus
                      : "+917660061579"}
                  </span>
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
