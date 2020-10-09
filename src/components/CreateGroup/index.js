import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import {Formik} from "formik";
import * as yup from "yup";

const schema = yup.object({
  group_name: yup.string().min(3, "Too Short").max(40, "Too Long").required("Group Name is Required"),
  group_leader: yup.string().min(3, "Too Short").max(40, "Too Long").required("Group Leader Is Required")
})
const CreateGroup = (props) => {

  return (
    <Container style={{ width: "100%", padding: "0px" }}>
       <div className="form_header"><h2>Create Groups</h2></div>
      <Formik
      validationSchema={schema}
      onSubmit={() => {console.log()}}
        initialValues={{
          group_name: "",
          group_leader: "",
        }}        
   
      >
        {({getFieldProps, handleSubmit, errors, touched}) => (
          <Form style={{ width: "100%", padding: "0px" }}
          onSubmit={handleSubmit}
          >
            <Row as={Col} xs={12} sm={12} md={12} lg={12}>
              <Form.Group as={Col} sm={6} md={6} lg={4} 
              controlId="group_name"

              >
                <Form.Label>Group Name</Form.Label>
                <Form.Control 
                type="text"
                size="lg"
                {...getFieldProps("group_name")}
                isInvalid={touched.group_name && errors.group_name}
                />
                <Form.Control.Feedback type="invalid">{errors.group_name}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} sm={6} md={6} lg={4} 
              controlId="group_leader"
              >
                <Form.Label>Group Leader</Form.Label>
                <Form.Control
                name="group_leader"
                type="text"
                size="lg"
                {...getFieldProps("group_leader")}
                isInvalid={touched.group_leader && errors.group_leader}
                />
                <Form.Control.Feedback type="invalid">{errors.group_leader}</Form.Control.Feedback>
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
  )
}

export default CreateGroup;