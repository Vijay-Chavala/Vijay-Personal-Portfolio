import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import styles from "../Contact/Contact.module.css";
import emailjs from "emailjs-com";
import Reveal from "../common/Reveal";

const CHANNEL_MESSAGES = {
  phone: "Connecting to the Phone...",
  mail: "Opening mail...",
  whatsapp: "Connecting to WhatsApp...",
};

const Contact = () => {
  // One value instead of three states with three effects — only one channel
  // can be opening at a time anyway.
  const [activeChannel, setActiveChannel] = useState(null);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  useEffect(() => {
    if (!activeChannel) return;
    const timer = setTimeout(() => setActiveChannel(null), 5000);
    return () => clearTimeout(timer);
  }, [activeChannel]);

  const labelFor = (channel, fallback) =>
    activeChannel === channel ? CHANNEL_MESSAGES[channel] : fallback;

  async function sendEmail(e) {
    e.preventDefault();
    const form = e.target;
    setStatus({ state: "sending", message: "" });

    try {
      await emailjs.sendForm(
        "service_6o7cpgc",
        "template_0tmbdpf",
        form,
        "user_0oYxQ6veRJeBj7a9Ycqhd"
      );
      form.reset();
      setStatus({
        state: "sent",
        message: "Thanks — your message has been sent. I'll get back to you soon.",
      });
    } catch (error) {
      setStatus({
        state: "error",
        message:
          "Sorry, the message could not be sent. Please email me directly at vijayychavala@gmail.com.",
      });
    }
  }

  const isSending = status.state === "sending";

  return (
    <Container className={` ${styles.contactSection}`}>
      <Reveal className="text-center mt-5 headingContent">
        <h6>Contact Me</h6>
        <h2>Ways to contact</h2>
        <div className="underline"></div>
      </Reveal>
      <Row>
        <Col sm="12" md="12" lg="6" className={`mx-auto ${styles.col1}`}>
          <Form autoComplete="off" onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="contactName">
              <Form.Label className={styles.label}>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactEmail">
              <Form.Label className={styles.label}>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                required
                className={styles.input}
              />
            </Form.Group>

            <Form.Group className=" mb-3" controlId="contactMessage">
              <Form.Label className={styles.label}>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                required
                className={styles.input}
                name="message"
              />
            </Form.Group>
            <button
              type="submit"
              className="soft-light-shadow btn soft-btn"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
            {status.message && (
              <p
                className="mt-3 mb-0"
                role={status.state === "error" ? "alert" : "status"}
              >
                {status.message}
              </p>
            )}
          </Form>
        </Col>
        <Col sm="12" md="12" lg="6">
          <div className={` ${styles.contactIcons}`}>
            <ul className={styles.sidebar}>
              <li
                className={styles.navItem}
                onClick={() => setActiveChannel("phone")}
              >
                <a href="tel:+917660061579" className={styles.navLink}>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span className={styles.title}>
                    {labelFor("phone", "+917660061579")}
                  </span>
                </a>
              </li>
              <li
                className={styles.navItem}
                onClick={() => setActiveChannel("mail")}
              >
                <a
                  href="mailto:vijayychavala@gmail.com"
                  className={styles.navLink}
                >
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span className={styles.title}>
                    {labelFor("mail", "vijayychavala@gmail.com")}
                  </span>
                </a>
              </li>
              <li
                className={styles.navItem}
                onClick={() => setActiveChannel("whatsapp")}
              >
                <a
                  target="_blank"
                  href="https://wa.link/p5bfyy"
                  rel="noreferrer"
                  className={styles.navLink}
                >
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                  <span className={styles.title}>
                    {labelFor("whatsapp", "+917660061579")}
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
