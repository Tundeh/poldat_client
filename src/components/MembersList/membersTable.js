import React from "react";
import {Table} from "react-bootstrap";

const MembersTable = ({members}) => {
 return  <Table>
 <tbody>
   <tr>
     <th>#</th>
     <th>Member Id</th>
     <th>First Name</th>
     <th>Last Name</th>
     <th>Gender</th>
     <th>Age</th>
     <th>L.g.a</th>
     <th>State</th>
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
   </tr>
   {members.map(member => {
     return <tr key={member.id} className="table_row">
     <td>{member.id}</td>
     <td>{member.id}</td>
     <td>{member.first_name}</td>
     <td>{member.last_name}</td>
     <td>{member.gender}</td>
     <td>{member.age}</td>
     <td>{member.lga}</td>
     <td>{member.state}</td>
   </tr>
   })}
 </tbody>
</Table>
}
export default MembersTable;