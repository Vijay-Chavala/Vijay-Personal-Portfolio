import React, { useState } from "react";
import styles from "../NavBar/NavBar.module.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { menuItems } from "../../Data/Data";
const NavBar = () => {
  const [navActive, setNavActive] = useState(1);

  const menuItemActivate = (i) => {
    setNavActive(i);
  };

  return (
    <div>
      <Navbar className={`${styles.navBar} `} expand="lg">
        <Container className="mt-3">
          <Navbar.Brand as={Link} to="/" className={styles.navBarLogo}>
            Personal Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {menuItems.map((item) => {
                return (
                  <Nav.Link
                    key={item.id}
                    as={Link}
                    to={`/${item.to}`}
                    className={`m-2 px-4 ${
                      item.id === navActive ? styles.navActive : ""
                    }   ${styles.navLink}`}
                    onClick={() => menuItemActivate(item.id)}
                  >
                    {item.menuName}
                  </Nav.Link>
                );
              })}
            </Nav>
            <NavDropdown
              title="Quick Links"
              id="basic-nav-dropdown"
              className={`m-2 px-4   ${styles.navLink}`}
            >
              <NavDropdown.Item
                href="#action/3.1"
                className={`py-2   ${styles.navLink}`}
              >
                <i className="fa fa-download me-3 "></i>
                Download CV
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                className={`py-2 ${styles.navLink}`}
              >
                <i className="fa fa-external-link me-3" aria-hidden="true"></i>
                Live Web Applications
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
