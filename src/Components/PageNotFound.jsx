import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Container className="bgHeight notFound">
      <div className="notFoundCode" aria-hidden="true">
        4<span>0</span>4
      </div>
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist or has moved.</p>
      <div className="notFoundActions">
        <Link to="/" className="soft-light-shadow btn soft-btn btnPrimary">
          <i className="bi bi-house" aria-hidden="true"></i> Back home
        </Link>
        <Link to="/projects" className="soft-light-shadow btn soft-btn">
          See projects
        </Link>
      </div>
    </Container>
  );
};

export default PageNotFound;
