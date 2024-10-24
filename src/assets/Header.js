import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <a href='/' >
      <Navbar.Brand>SIMILIASUITE</Navbar.Brand>
      </a>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/practitioners">Practitioners</Nav.Link>
        <Nav.Link as={Link} to="/medicines">Patients</Nav.Link>
        <Nav.Link as={Link} to="/regimens">Medicines</Nav.Link>
        <Nav.Link as={Link} to="/regimens">Regimen</Nav.Link>
        <Nav.Link as={Link} to="/regimens">Update Regimen</Nav.Link>
        <Nav.Link as={Link} to="/regimens">Medicine Dispatch</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
