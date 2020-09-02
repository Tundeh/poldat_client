import React from "react";
import { Form, Col, Row, Button, Container } from "react-bootstrap";

import "./index.scss";

const AddMember = () => {
  return (
    <Container style={{ width: "100%", padding: "0px" }}>
      <Form style={{ width: "100%", padding: "0px" }}>
        <Row as={Col} xs={12} sm={12} md={12} lg={12}>
          <Form.Group as={Col} sm={6} md={6} lg={4} controlId="firstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="email" placeholder="Enter email"></Form.Control>
          </Form.Group>

          <Form.Group
            as={Col}
            xs={12}
            sm={6}
            md={6}
            lg={4}
            controlId="middlename"
          >
            <Form.Label>Middle Name</Form.Label>
            <Form.Control type="text" placeholder="Middle Name"></Form.Control>
          </Form.Group>

          <Form.Group
            as={Col}
            xs={12}
            sm={6}
            md={6}
            lg={4}
            controlId="lastname"
          >
            <Form.Label>Last Name</Form.Label>

            <Form.Control type="text" placeholder="Last Name"></Form.Control>
          </Form.Group>

          <Form.Group as={Col} xs={12} sm={6} md={6} lg={4} controlId="Gender">
            <Form.Label>Gender</Form.Label>
            <Form.Control type="text" placeholder="gender"></Form.Control>
          </Form.Group>

          <Form.Group as={Col} xs={12} sm={6} md={6} lg={4} controlId="marital">
            <Form.Label>Marital Status</Form.Label>
            <Form.Control as="select" defaultValue="Single">
              <option>Single</option>
              <option>Married</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} xs={12} sm={6} md={6} lg={4}>
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control type="date"></Form.Control>
          </Form.Group>

          <Form.Group
            as={Col}
            xs={12}
            sm={6}
            md={6}
            lg={4}
            controlId="Religion"
          >
            <Form.Label>Religion</Form.Label>
            <Form.Control as="select" defaultValue="select">
              <option>Islam</option>
              <option>Christian</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} xs={12} sm={6} md={6} lg={4} controlId="Email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="text"
              defaultValue="example@email.com"
            ></Form.Control>
          </Form.Group>

          <Form.Group as={Col} xs={12} sm={6} md={6} lg={4} controlId="mobile">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="number"
              defaultValue="08188888800"
            ></Form.Control>
          </Form.Group>

          <Form.Group as={Col} xs={12} sm={6} md={6} lg={4} controlId="Group">
            <Form.Label>Group</Form.Label>
            <Form.Control as="select" placeholder="Group1"></Form.Control>
          </Form.Group>

          <Form.Group as={Col} xs={12} sm={6} md={6} lg={4} controlId="Address">
            <Form.Label>Address</Form.Label>

            <Form.Control
              type="text"
              placeholder="134, right avenue"
            ></Form.Control>
          </Form.Group>

          <Form.Group as={Col} xs={12} sm={6} md={6} lg={4} controlId="ward">
            <Form.Label>Ward</Form.Label>
            <Form.Control as="select" defaultValue="Choose">
              <option>Dala</option>
              <option>Fage</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} xs={12} sm={6} md={6} lg={4} controlId="lga">
            <Form.Label>L.g.a</Form.Label>
            <Form.Control as="select" defaultValue="Choose">
              <option>Minjibir</option>
              <option>Rano</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} xs={12} sm={6} md={6} lg={4}>
            <Form.File
              id="exampleFormControlFile1"
              label="Example file input"
            />
          </Form.Group>
        </Row>

        <Row as={Col} xs={12} sm={12} md={12} lg={12}>
          <Form.Group as={Col} xs={12} sm={6} md={6} lg={4}>
            <Button type="submit">Save</Button>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
};

export default AddMember;
