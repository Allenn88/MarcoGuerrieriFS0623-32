import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
          <Navbar.Brand href="#">Home</Navbar.Brand>
          <Navbar.Brand href="#">About </Navbar.Brand>
          <Navbar.Brand href="#">Browse</Navbar.Brand>
      </Navbar>
    </Container>
  );
}

export default CustomNavbar;