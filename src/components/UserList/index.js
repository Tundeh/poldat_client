import React, {useEffect} from "react";
import {Table, Container} from "react-bootstrap";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../redux/actions/userActions";

const UserList = ({users, actions}) => {
  
  useEffect(() => {
   actions.loadUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
return (
  <Container>
     <div className="form_header"><h2>Groups List</h2></div>
  <Table>
    <th>#</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>User Type</th>
  {users.map(user => {
    return(
    <tr>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
      <td>{user.user_type}</td>
    </tr>)
  })}
  </Table>
  </Container>
)
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  actions: {loadUsers: bindActionCreators(userActions.loadUsers, dispatch)
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);