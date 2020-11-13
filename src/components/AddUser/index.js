import React from "react";
import {Formik} from "formik";
import {Form, Col, Row, Button, Container} from "react-bootstrap";
import * as yup from "yup";


const schema = yup.object({
  first_name: yup.string().min(2, "too short").max(40, "too long").required("First Name Is Required"),
  last_name: yup.string().min(2, "Too Short").max(40, "Too Long").required("Last Name Is Required"),
  password: yup.string().min(3, "Too Short").required("Password Is Required"),
  user_type: yup.string().required("Required"),
  email: yup.string().email("Invalid Email").required("Required"),
});

function AddUser() {
  return (
    <Container style={{ width: "100%", padding: "0px" }}>
    
    <Formik
   validationSchema={schema}
   onSubmit={values => console.log(values)}
      initialValues={{
        first_name: "",
        last_name: "",
        user_type: "",
        password: "",
        email: "",
        
      }}        
    >
      {({ errors, getFieldProps, handleSubmit, touched }) => (
        <Form
        
          onSubmit={handleSubmit}
          style={{ width: "100%", padding: "0px" }}
        >
          <Row as={Col} xs={12} sm={12} md={12} lg={12}>
            <Form.Group as={Col} sm={6} md={6} lg={4} controlId="first_name">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                size="lg"
                name="first_name"
                {...getFieldProps("first_name")}
                type="text"
                placeholder="First Name"
                isInvalid={touched.first_name && errors.first_name}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.first_name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} sm={6} md={6} lg={4} controlId="last_name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                size="lg"
                name="last_name"
                {...getFieldProps("last_name")}
                type="text"
                placeholder="Last Name"
                isInvalid={touched.last_name && errors.last_name}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.last_name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} sm={6} md={6} lg={4} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                size="lg"
                name="email"
                {...getFieldProps("email")}
                type="text"
                placeholder="email" 
                isInvalid={touched.email && errors.email}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} sm={6} md={6} lg={4} controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                size="lg"
                name="password"
                {...getFieldProps("password")}
                type="text"
                placeholder="password"
                isInvalid={touched.password && errors.password}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} sm={6} md={6} lg={4} controlId="user_type">
              <Form.Label>User Type</Form.Label>
              <Form.Control
                size="lg"
                name="user_type"
                {...getFieldProps("user_type")}
                as="select"
                defaultValue="Employee"
                isInvalid={touched.first_name && errors.first_name}
              >
                <option>Admin</option>
                <option>Employee</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.user_type}
              </Form.Control.Feedback>
            </Form.Group>
         </Row>
         <Row as={Col} xs={12} sm={12} md={12} lg={12}>
              <Form.Group as={Col} xs={12} sm={6} md={6} lg={4}>
                <Button size="lg" type="submit">
                  Save
                </Button>
              </Form.Group>
            </Row>
        
          </Form>
      )}
    </Formik>
    </Container>
  );
}

export default AddUser;
