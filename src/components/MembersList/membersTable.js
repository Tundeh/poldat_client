import React, {useState} from "react";
import {Table, Spinner} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import  propTypes  from "prop-types";
import { toast } from "react-toastify";

import Modal from "./modal/index";

const MembersTable = ({members, member, actions}) => {
  
  const [showModal, setshowModal] = useState(false);

//  const [memberDetails, setMemberDetails] = useState({})

  const handleToggle = (id) => {
    actions.loadMember(id);
    setshowModal((showModal) => !showModal);
    
  }

// handle closing of modal

  const handleClose = () => {
    setshowModal((showModal) => !showModal);
  }

// handle member delete 

  const handleDelete = (member) => {
    toast.success("Member deleted");
    actions.deleteMember(member);
  }

 return <> <Table style={{borderWidth: "2px", borderColor: "red"}}>
 <tbody>
   <tr>
     <th>S/N</th>
     <th>Member Id</th>
     <th>First Name</th>
     <th>Last Name</th>
     <th>Gender</th>
     <th>Age</th>
     <th>L.g.a</th>
     <th>State</th>
     <th>Actions</th>
   </tr>

   <tr className="table_row">   
   </tr>
   {members.length < 0 ? <Spinner animation="border" variant="secondary" /> : members.map((member, index) => {
     return <tr key={member._id} className="table_row">
     <td>{index + 1}</td>
     <td>{member.member_id}</td>
     <td>{member.first_name}</td>
     <td>{member.last_name}</td>
     <td>{member.gender}</td>
     <td>{member.age}</td>
     <td>{member.lga}</td>
     <td>{member.state}</td>
     <td>
       
     <a href="#!" className="crud_icons" style={{fontSize: "1em", margin: "0.5em", display: "inline"}} onClick={() => handleToggle(member._id)}><FontAwesomeIcon icon="eye"/></a> 
       <a href="#!" className="crud_icons" style={{fontSize: "1em", margin: "0.5em", display: "inline", color: "yellow"}}><FontAwesomeIcon icon="edit"/></a>
       <a href="#!" className="crud_icons" onClick={() => handleDelete(member)} style={{fontSize: "1em", margin: "0.5em", display: "inline", color: "red"}}><FontAwesomeIcon icon="trash-alt"/></a>
     
     </td>
   </tr>
   })}
 </tbody>
</Table>
<Modal isShowing={showModal} member={member} handleClick={handleClose}/>
</>
}

MembersTable.propTypes = {
  members: propTypes.array.isRequired
}

export default MembersTable;