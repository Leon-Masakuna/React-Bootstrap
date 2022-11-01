import React from "react";
import "../styles/navbar.css";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";

export default function NavBar() {
  return (
    <div className="main-side">
      <Navbar bg="dark" expand="sm" variant="dark" fixed="top">
        <Container>
          <NavbarBrand>Hey! I am learning React Bootstrap</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
}
