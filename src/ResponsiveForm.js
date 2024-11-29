// ResponsiveForm.js
import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const ResponsiveForm = () => {
  return (
    <Form className="p-4">
      <Row className="mb-3">
        {/* First Name */}
        <Form.Group as={Col} md="6" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" required />
        </Form.Group>

        {/* Last Name */}
        <Form.Group as={Col} md="6" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" required />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        {/* Email */}
        <Form.Group as={Col} md="12" controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        {/* Password */}
        <Form.Group as={Col} md="12" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" required />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        {/* Address */}
        <Form.Group as={Col} md="12" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        {/* City */}
        <Form.Group as={Col} md="6" controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter city" />
        </Form.Group>

        {/* Zip Code */}
        <Form.Group as={Col} md="6" controlId="formZip">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type="text" placeholder="Enter zip code" />
        </Form.Group>
      </Row>

      {/* Submit Button */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ResponsiveForm;
