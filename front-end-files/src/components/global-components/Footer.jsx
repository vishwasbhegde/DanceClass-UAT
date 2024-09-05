import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <>
    <footer className="bg-dark text-white mt-5 p-4">
      <Container>
        <Row>
          <Col md="4" className="mb-4">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col md="4" className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md="4" className="mb-4">
            <h5>Contact Us</h5>
            <p>
              1234 Street Name
              <br />
              City, State, 56789
              <br />
              Email: info@example.com
              <br />
              Phone: (123) 456-7890
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  )
}

export default Footer