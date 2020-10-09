import React from "react";
import {Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import  propTypes  from "prop-types";

const MembersTable = ({members}) => {
 return  <Table style={{borderWidth: "2px", borderColor: "red"}}>
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
     <td>1</td>
     <td>422244</td>
     <td>Jamiu</td>
     <td>Suleiman</td>
     <td>Male</td>
     <td>30</td>
     <td>Dala</td>
     <td>Kano</td>
     <td style={{display: "inline-flex"}}>
 
       <a href="/" className="crud_icons" style={{fontSize: "1em", margin: "0.5em", display: "inline"}}><FontAwesomeIcon icon="eye"/></a> 
       <a href="/" className="crud_icons" style={{fontSize: "1em", margin: "0.5em", display: "inline", color: "yellow"}}><FontAwesomeIcon icon="edit"/></a>
       <a href="/" className="crud_icons" style={{fontSize: "1em", margin: "0.5em", display: "inline", color: "red"}}><FontAwesomeIcon icon="trash-alt"/></a>

     </td>
   </tr>
   <tr className="table_row">
     <td>2</td>
     <td>422244</td>
     <td>Bolaji</td>
     <td>Amusan</td>
     <td>Male</td>
     <td>30</td>
     <td>Dala</td>
     <td>Kano</td>
     <td>
       <a href="/" className="crud_icons" style={{fontSize: "1em", margin: "0.5em", display: "inline"}}><FontAwesomeIcon icon="eye"/></a> 
       <a href="/" className="crud_icons" style={{fontSize: "1em", margin: "0.5em", display: "inline", color: "yellow"}}><FontAwesomeIcon icon="edit"/></a>
       <a href="/" className="crud_icons" style={{fontSize: "1em", margin: "0.5em", display: "inline", color: "red"}}><FontAwesomeIcon icon="trash-alt"/></a>
     </td>
   </tr>
   {members.map((member, index) => {
     return <tr key={member._id} className="table_row">
     <td>{index}</td>
     <td>{member.member_id}</td>
     <td>{member.first_name}</td>
     <td>{member.last_name}</td>
     <td>{member.gender}</td>
     <td>{member.age}</td>
     <td>{member.lga}</td>
     <td>{member.state}</td>
     <td>
       
     <a href="/" className="crud_icons" style={{fontSize: "1em", margin: "0.5em", display: "inline"}}><FontAwesomeIcon icon="eye"/></a> 
       <a href="/" className="crud_icons" style={{fontSize: "1em", margin: "0.5em", display: "inline", color: "yellow"}}><FontAwesomeIcon icon="edit"/></a>
       <a href="/" className="crud_icons" style={{fontSize: "1em", margin: "0.5em", display: "inline", color: "red"}}><FontAwesomeIcon icon="trash-alt"/></a>
     
     </td>
   </tr>
   })}
 </tbody>
</Table>
}

MembersTable.propTypes = {
  members: propTypes.array.isRequired
}

export default MembersTable;