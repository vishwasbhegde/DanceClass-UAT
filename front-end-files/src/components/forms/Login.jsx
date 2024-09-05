import React,{useState} from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { InputGroup } from 'react-bootstrap';

function Login() {

    const [formData, setFormData] = useState({
        emailOrUsername: '',
        password: '',
      });
    
      const [errors, setErrors] = useState({});
      const [submitted, setSubmitted] = useState(false);
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    
        if (name === 'emailOrUsername') {
          validateEmailOrUsername(value);
        }
      };
    
      const validateEmailOrUsername = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErrors((prevErrors) => ({
          ...prevErrors,
          emailOrUsername: emailRegex.test(value) || value.trim() !== '' ? '' : 'Invalid email or username',
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    
        if (!errors.emailOrUsername && formData.emailOrUsername && formData.password) {
          console.log('Login data submitted:', formData);
          // Add login logic here
          navigate('/dashboard');
        }
      };

      const [passwordVisible, setPasswordVisible] = useState(false);

        const togglePasswordVisibility = () => {
          setPasswordVisible(!passwordVisible);
        };
      
  return (
    <>
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1 className="text-center">Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmailOrUsername" className="mb-3">
              <Form.Label>Email or Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email or username"
                name="emailOrUsername"
                value={formData.emailOrUsername}
                onChange={handleChange}
                isInvalid={submitted && !!errors.emailOrUsername}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.emailOrUsername}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Enter password"
                />
            <InputGroup.Append>
               <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </Button> 
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          {submitted && errors.emailOrUsername && (
            <Alert variant="danger" className="mt-3">
              {errors.emailOrUsername}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Login