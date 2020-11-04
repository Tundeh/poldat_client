import React, { useEffect } from "react";
import Layout from "./components/Layout/index";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Route, Switch, Redirect} from "react-router-dom";
import propTypes from "prop-types";
import * as authActions from "./redux/actions/authActions";

import {
  faUser,
  faDatabase,
  faPlusSquare,
  faHome,
  faUsers,
  faAddressBook,
  faUserPlus,
  faShareAlt,
  faCalendarAlt,
  faEye,
  faEdit,
  faTrashAlt,
  faSearch,
  faCheckCircle,
  faCopyright,
  faSignOutAlt

} from "@fortawesome/free-solid-svg-icons";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./components/Dashboard/index";
import AddMember from "./components/AddMember/index";
import MembersList from "./components/MembersList/index";
import Home from "../src/Home/index";
import "./App.scss";
import GroupList from "./components/GroupList";
import AddUser from "./components/AddUser/index";
import UserList from "./components/UserList/index";
import CreateGroup from "./components/CreateGroup";

library.add(
  faUser,
  faDatabase,
  faPlusSquare,
  faHome,
  faUsers,
  faAddressBook,
  faUserPlus,
  faShareAlt,
  faCalendarAlt,
  faEye,
  faEdit,
  faTrashAlt,
  faSearch,
  faCheckCircle,
  faCopyright,
  faSignOutAlt

);
function App({authent, actions}) {
  
  useEffect(() => {
    actions.checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    
   <>
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/">
    {
    authent.isAuthenticated ?  
      <>
          <Layout />
            <div className="route-wrapper">
              <Route exact path="/dashboard" component={Dashboard}>
                </Route>
              <Route exact path="/members/new" component={AddMember} />
              <Route exact path="/members/list" component={MembersList}></Route>
              <Route exact path="/groups/list" component={GroupList}></Route>
              <Route exact path="/users/new" component={AddUser}></Route>
              <Route exact path="/users/list" component={UserList}></Route>
              <Route exact path="/groups/new" component={CreateGroup}></Route>
              <Redirect from="/" to="/dashboard"/>
              <ToastContainer  autoClose={3000} hideProgressBar />
            </div>

            </>
            : <Redirect to="/home"/>
            
          }  
     
      </Route>
        <Route>
          <div>Not Found</div>
        </Route>
      </Switch>
    </>
  );
}

App.propTypes = {
  authent: propTypes.object.isRequired,
  actions: propTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    authent: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      checkUser: bindActionCreators(authActions.checkUser, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
