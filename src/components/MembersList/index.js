import React, {useEffect} from "react";
import "./index.scss";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import ReactScrollBar from "react-perfect-scrollbar";
import propTypes from "prop-types";
import * as memberActions from "../../redux/actions/memberActions";
import MembersTable from "./membersTable";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Col, FormControl, InputGroup } from "react-bootstrap";

const MembersList = ({actions, members, member}) => { 
  
  useEffect(() => {

      actions.loadMembers();
    
  }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   ,[]
  )


  return (
    <div className="table-wrapper">
      <div className="table-header">
       
    
      
      <Col className="search-box" xs={6} xl={4}>
          <InputGroup>
          <InputGroup.Prepend><span style={{display: "flex", alignItems: "center", justifyContent: "center"}}><FontAwesomeIcon icon="search"></FontAwesomeIcon></span></InputGroup.Prepend>
          
          <FormControl  placeholder="Search"></FormControl>
          </InputGroup>
      </Col>
      <Col style={{display: "flex", justifyContent: "center"}} xs={6} xl={4}><span style={{fontSize: "1.3em", fontWeight: "400"}}>Member's List</span></Col>
       
      </div>
      <ReactScrollBar backgroundColor="transparent" component="div">
        <div style={{ display: "flex" , marginTop: "2em", padding: "1em"}}>
          <MembersTable members={members} member={member} actions={actions}/>
        </div>
      </ReactScrollBar>
    </div>
  );
};

MembersList.propTypes = {
  members: propTypes.array.isRequired,
  member: propTypes.object.isRequired,
  actions: propTypes.object.isRequired
}
function mapStateToProps(state) {
  return {
    members: state.members.members,
    member: state.members.member,
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: {
    loadMembers: bindActionCreators(memberActions.loadMembers, dispatch),
    deleteMember: bindActionCreators(memberActions.deleteMember, dispatch),
    loadMember: bindActionCreators(memberActions.loadMember, dispatch)
  }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MembersList);