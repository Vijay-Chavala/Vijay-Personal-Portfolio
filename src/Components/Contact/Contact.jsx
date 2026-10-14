import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import styles from "../Contact/Contact.module.css";
import emailjs from "emailjs-com";
import Reveal from "../common/Reveal";

// Each channel shows its details up front. They used to sit behind a hover
// reveal, which touch screens can't trigger, so on phones the only way to
// see the number or address was to tap and launch the dialer.
const CHANNELS = [
  {
    key: "phone",
    icon: "fa fa-phone",
    label: "Call me",
    value: "+91 76600 61579",
    href: "tel:+917660061579",
    pending: "Connecting to the phone...",
  },
  {
    key: "mail",
    icon: "fa fa-envelope",
    label: "Email me",
    value: "vijayychavala@gmail.com",
    href: "mailto:vijayychavala@gmail.com",
    pending: "Opening mail...",
  },
  {
    key: "whatsapp",
    icon: "fa fa-whatsapp",
    label: "WhatsApp",
    value: "+91 76600 61579",
    href: "https://wa.link/p5bfyy",
    external: true,
    pending: "Connecting to WhatsApp...",
  },
];

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
    <Container className={`pb-5 ${styles.contactSection}`}>
      <Reveal className="headingContent">
        <h6>Contact Me</h6>
        <h2>Let's work together</h2>
        <div className="underline"></div>
      </Reveal>
      <Row className="g-4 align-items-stretch">
        <Col lg="5">
          <Reveal variant="left" className={styles.channels}>
            <h3 className={styles.panelTitle}>Get in touch directly</h3>
            <p className={styles.panelLead}>
              Prefer a quick chat? Reach me on any of these — I usually reply
              within a day.
            </p>
            <ul className={styles.channelList}>
              {CHANNELS.map((channel) => (
                <li key={channel.key}>
                  <a
                    href={channel.href}
                    className={styles.channel}
                    onClick={() => setActiveChannel(channel.key)}
                    {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <span className={styles.channelIcon}>
                      <i className={channel.icon} aria-hidden="true"></i>
                    </span>
                    <span className={styles.channelText}>
                      <small>{channel.label}</small>
                      <span>
                        {activeChannel === channel.key ? channel.pending : channel.value}
                      </span>
                    </span>
                    <i
                      className={`bi bi-arrow-up-right ${styles.channelArrow}`}
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </Col>
        <Col lg="7">
          <Reveal variant="right" delay={100} className={styles.formPanel}>
            <h3 className={styles.panelTitle}>Send a message</h3>
            <Form autoComplete="off" onSubmit={sendEmail}>
              <Row className="g-3">
                <Col md="6">
                  <Form.Group controlId="contactName">
                    <Form.Label className={styles.label}>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your name"
                      name="name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group controlId="contactEmail">
                    <Form.Label className={styles.label}>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="you@example.com"
                      name="email"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs="12">
                  <Form.Group controlId="contactMessage">
                    <Form.Label className={styles.label}>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      placeholder="Tell me a little about your project..."
                      required
                      name="message"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <button
                type="submit"
                className={`soft-light-shadow btn soft-btn btnPrimary ${styles.submit}`}
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <span className={styles.spinner} aria-hidden="true" /> Sending...
                  </>
                ) : (
                  <>
                    Send message <i className="bi bi-send" aria-hidden="true"></i>
                  </>
                )}
              </button>
              {status.message && (
                <p
                  key={status.state}
                  className={`${styles.status} ${
                    status.state === "error" ? styles.statusError : styles.statusOk
                  }`}
                  role={status.state === "error" ? "alert" : "status"}
                >
                  <i
                    className={
                      status.state === "error" ? "bi bi-exclamation-circle" : "bi bi-check-circle"
                    }
                    aria-hidden="true"
                  ></i>
                  {status.message}
                </p>
              )}
            </Form>
          </Reveal>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
