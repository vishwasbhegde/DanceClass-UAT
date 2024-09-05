import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './globalComponent.css';

function Header() {
  return (
   <Navbar bg="dark" expand="lg" className="sticky-navbar">
      <Container>
        <Navbar.Brand href="/">
        <img src="https://procodersonline.com/wp-content/uploads/2020/06/procodersonlinecom.png" alt="Coding Tricks, How To Guides and Error Fixes" style={{width: "225px;"}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarNav" className='mx-auto'>
          <Nav className="justify-content-center w-100">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/price">Price</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header