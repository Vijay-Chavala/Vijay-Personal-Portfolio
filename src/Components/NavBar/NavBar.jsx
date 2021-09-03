import React from "react";
import styles from "../NavBar/NavBar.module.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "../../Data/Data";
const NavBar = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <div>
      <Navbar className={`${styles.navBar} `} expand="lg">
        <Container className="mt-3">
          <Navbar.Brand as={Link} to="/" className={styles.navBarLogo}>
            Personal Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {menuItems.map((item) => {
                return (
                  <Nav.Link
                    key={item.id}
                    as={Link}
                    to={`/${item.to}`}
                    className={`m-2 px-4 ${
                      item.to === splitLocation[1] ? styles.navActive : ""
                    } ${styles.navLink}`}
                  >
                    {item.menuName}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
