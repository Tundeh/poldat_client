import React, {useEffect} from "react";
import { Container, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as groupActions from "../../redux/actions/groupActions";

import "./index.scss";

const GroupList = ({groups, actions}) => {
  useEffect(() => {
    actions.loadGroups();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container>
       <div className="form_header"><h2>Groups List</h2></div>
      <Table>
        <tbody>
          <th>S/N</th>
          <th>Group Name</th>
          <th>Group Leader</th>
          {groups.map(group => {
           return ( <tr key={group.__id}>
              <td></td>
              <td>group.group_name</td>
              <td>group.group_leader</td>
              <td>group.date_created</td>
            </tr>)
          })}
        </tbody>
      </Table>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    groups: state.groups,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  actions: {
    loadGroups: bindActionCreators(groupActions.loadGroups, dispatch)  
  }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);