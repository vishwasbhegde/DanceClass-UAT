import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// import axios from 'axios';


function RegistrationForm() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        linkedin: '',
        termsAccepted: false,
        userType: '',
      });
    
      const [errors, setErrors] = useState({});
      const [submitted, setSubmitted] = useState(false);
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
    
        // Validate email on change
        if (name === 'email') {
          validateEmail(value);
        }
        
      };
    
      const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: emailRegex.test(email) ? '' : 'Invalid email format',
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    
        // Final validation check
        if (!errors.email && formData.email && formData.userType) {
          console.log('Form data submitted:', formData);
          // You can add form submission logic here
          // navigate('/dashboard');
          // axios.post('http://localhost:5001/api/insert', formData)
          // console.log(formData);
        }
      };
    

  return (
    <>
    
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">Registration Form</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLastName" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMobile" className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter mobile number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formUserType" className="mb-3">
              <Form.Label>Are you a:</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Student"
                  name="userType"
                  value="student"
                  checked={formData.userType === 'student'}
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  type="radio"
                  label="Teacher"
                  name="userType"
                  value="teacher"
                  checked={formData.userType === 'teacher'}
                  onChange={handleChange}
                  required
                />
              </div>
            </Form.Group>

            {/* <Form.Group controlId="formLinkedIn" className="mb-3">
              <Form.Label>LinkedIn URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter LinkedIn URL"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                required
              />
            </Form.Group> */}

            <Form.Group controlId="formTerms" className="mb-3">
              <Form.Check
                type="checkbox"
                label="I accept the terms and conditions"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default RegistrationForm