import React from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import {Formik} from "formik";
import propTypes from "prop-types";
import * as yup from "yup";

import "./index.scss";
const Modal = ({isShowing, handleClick, handleLogin, auth}) => {
    const schema = yup.object({
      email: yup.string().email().required(),
      password: yup.string().required()
    })
return(
  isShowing ?
  <div className="login__modal">
    <div className="modal-overlay" onClick={handleClick}></div>
  <div className="modal-wrapper">
      <div className="header">
        <div>Login</div>
        <span href="#" className="modal__button" onClick={handleClick}>
          <span></span></span>
        </div>
        
    <div>
      <Formik
      validationSchema={schema}
      onSubmit={values => handleLogin(values)}
      initialValues={{
        email: "",
        password: ""
      }}
      > 
        {({errors, getFieldProps, handleSubmit, touched}) => (
    <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" 
              {...getFieldProps("email")}
              isInvalid={touched.email && errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" {...getFieldProps("password")}
              isInvalid={touched.password && errors.password}
              />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group style={{display: "flex", justifyContent: "center"}}>
              <Button className="submit__button" type="submit">Log In {auth.isFetching ? <Spinner animation="border" variant="secondary" /> : null}</Button> 
            </Form.Group>
        </Form>
        )}
        </Formik>
    </div>
    
    </div>
  </div>
  
: null
)
}

Modal.propTypes = {
  handleLogin: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  isShowing: propTypes.bool.isRequired,
  handleClick: propTypes.func.isRequired
}
export default Modal;