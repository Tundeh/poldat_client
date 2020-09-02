import React from "react";
import { Table, Pagination } from "react-bootstrap";
import "./index.scss";
import ReactScrollBar from "react-perfect-scrollbar";

const MembersList = (props) => {
  return (
    <div className="table_wrapper">
    <div className="pagination_wrapper">
    <Pagination size="sm" style={{marginRight: "10px"}}>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
      </div>
      <ReactScrollBar>
      <Table striped={true} bordered={true} hover={true} variant="dark">
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
        </tbody>
      </Table>
      </ReactScrollBar>
    </div>
  );
};

export default MembersList;
