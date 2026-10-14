import React, { useEffect, useState } from "react";
import styles from "../NavBar/NavBar.module.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import { menuItems } from "../../Data/Data";

const NavBar = () => {
  const { pathname } = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu after navigating — it used to stay open over the
  // new page until the toggler was tapped again.
  useEffect(() => setExpanded(false), [pathname]);

  // Once the page moves, the bar gets a frosted background so links stay
  // readable over the content scrolling beneath it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      className={`${styles.navBar} ${scrolled || expanded ? styles.navScrolled : ""}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.navBarLogo}>
          <span className={styles.logoMark} aria-hidden="true">
            VC
          </span>
          <span className={styles.logoText}>Vijay Chavala</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-label={expanded ? "Close menu" : "Open menu"}
          className={styles.toggler}
        >
          <span className={`${styles.burger} ${expanded ? styles.burgerOpen : ""}`}>
            <span />
            <span />
            <span />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ms-auto ${styles.navList}`}>
            {/* Plain NavLink rather than Nav.Link: react-bootstrap runs
                className through classnames(), which drops the function form
                NavLink needs to style the active route. */}
            {menuItems.map((item, index) => (
              <NavLink
                key={item.id}
                to={`/${item.to}`}
                // Without `end`, "/" would match every route and Home would
                // always look active.
                end={item.to === ""}
                style={{ "--i": index }}
                className={({ isActive }) =>
                  `nav-link ${styles.navLink} ${isActive ? styles.navActive : ""}`
                }
              >
                {item.menuName}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
