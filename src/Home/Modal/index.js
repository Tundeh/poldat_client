import React from "react";
import { Form, Button } from "react-bootstrap";
import "./index.scss";
const Modal = ({isShowing, handleClick}) => {
  
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
    <Form >
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required/>
                
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control required/>
            </Form.Group>

            <Form.Group>
              <Button type="submit">Log In</Button>
            </Form.Group>
        </Form>
    </div>
    
    </div>
  </div>
  
: null)
}

export default Modal;