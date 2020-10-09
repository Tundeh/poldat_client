import React from "react";
import * as yup from "yup";
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import { Formik } from "formik";
import "./index.scss";


const schema = yup.object({
  first_name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  last_name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  gender: yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  marital_status: yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  date_birth: yup.date().required("Date Of Birth IsRequired"),
  religion: yup.string().required(),
  email: yup.string().email("Invalid Email"),
  mobile_number: yup.string().required("Required"),
  group: yup.string().required(),
  address: yup.string().min(6, "Too Short!").max(50, "Too Long!").required("Address is Required"),
  city: yup.string().min(3, "Too Short!").max(50, "Too Long!").required("City is Required"),
  ward: yup.string().min(3, "Too Short!").max(50, "Too Long!"),
  lga: yup.string().min(3, "Too Short!").max(50, "Too Long!"),
  state: yup.string("state is invalid")
});

const AddMember = () => {
  return (
    <Container style={{ width: "100%", paddingTop: "1em" }}>
    <div className="form_header"><h2>Add Members</h2></div>  
      <Formik
     validationSchema={schema}
     onSubmit={console.log}
        initialValues={{
          first_name: "",
          middle_name: "",
          last_name: "",
          gender: "",
          date_birth: "",
          marital_status: "",
          religion: "",
          email: "",
          mobile_number: "",
          group: "",
          address1: "",
          city: "",
          ward: "",
          lga: "",
          state: "",
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

              <Form.Group
                as={Col}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                controlId="middle_name"
              >
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  name="middle_name"
                  {...getFieldProps("middle_name")}
                  placeholder="Middle Name"
                />
              
              </Form.Group>

              <Form.Group
                as={Col}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                controlId="last_name"
              >
                <Form.Label>Last Name</Form.Label>

                <Form.Control
                  size="lg"
                  type="text"
                  name="last_name"
                  {...getFieldProps("last_name")}
                  placeholder="Last Name"
                  isInvalid={touched.last_name && errors.last_name}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">{errors.last_name}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                controlId="Gender"
              >
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  size="lg"
                  as="select"
                  name="gender"
                  defaultValue="Female"
                  {...getFieldProps("gender")}
                  isInvalid={errors.gender}
                >
                  <option>Male</option>
                  <option>Female</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                controlId="marital_status"
              >
                <Form.Label>Marital Status</Form.Label>
                <Form.Control
                  name="marital_status"
                  {...getFieldProps("marital_status")}
                  size="lg"
                  as="select"
                  defaultValue="Single"
                  placeholder="Single"
                >
                  <option>Single</option>
                  <option>Married</option>
                </Form.Control>
              </Form.Group>

              <Form.Group
                as={Col}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                controlId="date"
              >
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control
                  name="date_birth"
                  {...getFieldProps("date")}
                  size="lg"
                  type="date"
                  isInvalid={touched.date_birth && errors.date_birth}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">{errors.date_birth}</Form.Control.Feedback>
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
                <Form.Control
                  name="religion"
                  {...getFieldProps("religion")}
                  size="lg"
                  as="select"
                >
                  <option>Islam</option>
                  <option>Christian</option>
                </Form.Control>
              </Form.Group>

              <Form.Group
                as={Col}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                controlId="email"
              >
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="email"
                  {...getFieldProps("email")}
                  size="lg"
                  type="text"
                  placeholder="example@email.com"
                  isInvalid={touched.email && errors.email}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                controlId="mobile_number"
              >
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="mobile_number"
                  {...getFieldProps("mobile_number")}
                  size="lg"
                  type="text"
                  defaultValue="08188888800"
                  placeholder="08188888800"
                  isInvalid={touched.mobile_number && errors.mobile_number}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">{errors.mobile_number}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                controlId="group"
              >
                <Form.Label>Group</Form.Label>
                <Form.Control
                  name="group"
                  {...getFieldProps("group")}
                  size="lg"
                  as="select"
                  isInvalid={touched.group && errors.group}
                >
                  <option>Group1</option>
                  <option>Group2</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">{errors.group}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                controlId="address"
              >
                <Form.Label>Address</Form.Label>
            <Form.Control name="address"
            type="text"
            size="lg"
            {...getFieldProps("address")}
            isInvalid={errors.address}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
               
              </Form.Group>

              <Form.Group
                as={Col}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                controlId="city"
              >
                <Form.Label>City/Town</Form.Label>
                <Form.Control
                  name="city"
                  {...getFieldProps("city")}
                  size="lg"
                  type="text"
                  isInvalid={touched.city && errors.city}
                />
                <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                controlId="ward"
              >
                <Form.Label>Ward</Form.Label>
                <Form.Control
                  name="ward"
                  {...getFieldProps("ward")}
                  size="lg"
                  as="select"
                  defaultValue="Choose"
                >
                  <option>Dala</option>
                  <option>Fage</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} xs={12} sm={6} md={6} lg={4} controlId="lga">
                <Form.Label>L.g.a</Form.Label>
                <Form.Control
                  name="lga"
                  {...getFieldProps("lga")}
                  size="lg"
                  as="select"
                  defaultValue="Choose"
                >
                  <option>Minjibir</option>
                  <option>Rano</option>
                </Form.Control>
              </Form.Group>

              <Form.Group
                as={Col}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                controlId="state"
              >
                <Form.Label>State</Form.Label>
                <Form.Control
                  name="state"
                  {...getFieldProps("state")}
                  size="lg"
                  as="select"
                >
                  <option>Kano</option>
                  <option>Kwara</option>
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
};

export default AddMember;
