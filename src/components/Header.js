import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => (
  <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
    <Container className="justify-content-center">
      <Navbar.Brand href="#home">Awesomer Weather</Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
