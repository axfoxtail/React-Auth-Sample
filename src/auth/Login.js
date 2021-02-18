import React from "react";
import {Form, Button} from 'react-bootstrap';
import {
  useLocation
} from "react-router-dom";

function Login() {
  const location = useLocation();
  
  return (
    <div className="App">
      <div className="App-header">
        <div className="card p-3">
          <Form className="login-form">
            <h2 className="text-center mb-3">{location.pathname === '/admin/login' ? 'Admin Login' : 'Login'}</h2>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;