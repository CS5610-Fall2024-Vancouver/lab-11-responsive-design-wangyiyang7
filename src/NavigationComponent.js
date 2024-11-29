// NavigationComponent.js
import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavigationComponent = ({
  isAuthenticated,
  handleLogin,
  handleLogout,
}) => {
  return (
    <Navbar bg="light" expand="md" className="navigation">
      <Navbar.Brand href="/">MyApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* Navigation Links using LinkContainer for React Router */}
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/profile">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tasks">
            <Nav.Link>Tasks</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/responsiveForm">
            <Nav.Link>Responsive Form</Nav.Link>
          </LinkContainer>
        </Nav>
        <div className="auth-buttons">
          {isAuthenticated ? (
            <Button variant="outline-primary" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button variant="outline-success" onClick={handleLogin}>
              Login
            </Button>
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationComponent;
