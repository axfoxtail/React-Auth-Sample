import React from "react";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {
  useHistory
} from "react-router-dom";
import {AuthFactory} from '../../../factory';

function Topbar() {
  const history = useHistory();

  const logout = () => {
    if (AuthFactory.logout()) {
      history.push('/login');
    }
  }

  return (
    <div className="topbar">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className="mr-auto">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ml-auto mr-5">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/home">Home</NavDropdown.Item>
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => logout()}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Topbar;