import React from "react";
import propTypes from "prop-types";
import {Container, Col, Row} from "react-bootstrap";
import avatar from "../../../assets/profile_avatar.png";
import ReactScrollBar from "react-perfect-scrollbar";

import "./index.scss";
const Modal = ({isShowing, handleClick, member}) => {
   
return(
  isShowing ?
  <div className="view__modal">
    <div className="modal-view-overlay" onClick={handleClick}></div>
  <div className="modal-view-wrapper">
      <div className="header">
        <div>Details</div>
        <span href="#" className="modal__button" onClick={handleClick}>
          <span></span></span>
     </div>
        <div className="modal-profile">
          <ReactScrollBar>
          <Container fluid>
            <Row>
              
              <Col md={9} lg={9} bsClass="custom-col">
                <div className="bio-header">Bio</div>
                <Row>
                  <Col sm={12} md={4} lg={4}>
                    <div className="bio-col">
                      <div className="bio-title">Name</div>
                       <div className="bio-details">{member.first_name + " " + member.last_name}</div>
                    </div>
                   
                  </Col>
                  <Col sm={12} md={4} lg={4}>
                    <div className="bio-col">
                      <div className="bio-title">Gender</div>
                      <div className="bio-details">{member.gender}</div>
                    </div>
                  </Col>
                  <Col sm={12} md={4} lg={4}>
                    <div className="bio-col">
                     <div className="bio-title">Member ID</div>
                     <div className="bio-details">{member.member_id}</div>
                    </div>
                    
                  </Col>
          
                  <Col sm={12} md={4} lg={4}>
                    <div className="bio-col">
                      <div className="bio-title">Marital Status</div>
                      <div className="bio-details">{member.marital_status}</div>
                    </div>
                   
                  </Col>

                  <Col sm={12} md={4} lg={4}>
                    <div className="bio-col">
                       <div className="bio-title">Religion</div>
                        <div className="bio-details">{member.religion}</div>
                    </div>
                    
                  </Col>

                  <Col sm={12} md={4} lg={4}>
                    <div className="bio-col">
                      <div className="bio-title">Age</div>
                      <div className="bio-details">{member.age}</div>
                    </div>
                    
                  </Col>


                </Row>
              </Col>
              <Col sm={9} md={3} lg={3} bsClass="custom-col">
              <img className="profile-image" alt="avatar" src={avatar}></img>
              </Col>
            </Row>
            

          
            <Row>
              
              <Col sm={12} md={12} lg={12} bsClass="custom-col">
                <div className="bio-header">Contact</div>
                <Row>
                  <Col sm={12} md={4} lg={3}>
                    <div className="bio-col">
                      <div className="bio-title">Email</div>
                       <div className="bio-details">{member.email_address}</div>
                    </div>
                   
                  </Col>
                  <Col sm={12} md={4} lg={3}>
                    <div className="bio-col">
                      <div className="bio-title">Address</div>
                      <div className="bio-details">{member.address}</div>
                    </div>
                  </Col>
                  <Col sm={12} md={4} lg={3}>
                    <div className="bio-col">
                     <div className="bio-title">Phone Number</div>
                     <div className="bio-details">{member.mobile_number}</div>
                    </div>
                    
                  </Col>
          
                  <Col sm={12} md={4} lg={3}>
                    <div className="bio-col">
                      <div className="bio-title">Marital Status</div>
                      <div className="bio-details">{member.marital_status}</div>
                    </div>
                   
                  </Col>

                  <Col sm={12} md={4} lg={3}>
                    <div className="bio-col">
                       <div className="bio-title">City</div>
                        <div className="bio-details">{member.city}</div>
                    </div>
                    
                  </Col>

                  <Col sm={12} md={4} lg={3}>
                    <div className="bio-col">
                      <div className="bio-title">ward</div>
                      <div className="bio-details">{member.ward}</div>
                    </div>
                    
                  </Col>

                  <Col sm={12} md={4} lg={3}>
                    <div className="bio-col">
                      <div className="bio-title">LGA</div>
                      <div className="bio-details">{member.lga}</div>
                    </div>
                    
                  </Col>

                  <Col sm={12} md={4} lg={3}>
                    <div className="bio-col">
                      <div className="bio-title">State</div>
                      <div className="bio-details">{member.state}</div>
                    </div>
                    
                  </Col>
                </Row>
              </Col>
            </Row>

          </Container>
    </ReactScrollBar>
    </div>
      </div>  
    
  </div>
  
: null
)
}

Modal.propTypes = {
  isShowing: propTypes.bool.isRequired,
  handleClick: propTypes.func.isRequired
}
export default Modal;      