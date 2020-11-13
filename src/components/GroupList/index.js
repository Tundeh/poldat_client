import React, {useEffect} from "react";
import { Container, Table } from "react-bootstrap";
import  propTypes  from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as groupActions from "../../redux/actions/groupActions";

import "./index.scss";

const GroupList = ({groups, actions}) => {

  useEffect(() => {
    actions.loadGroups();;
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
              <td>{group._id}</td>
              <td>{group.name}</td>
            </tr>)
          })}
        </tbody>
      </Table>
    </Container>
  );
};

GroupList.propTypes = {
  groups: propTypes.object.isRequired,
  actions: propTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    groups: state.groups.groups,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: {
    loadGroups: bindActionCreators(groupActions.loadGroups, dispatch)  
  }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
