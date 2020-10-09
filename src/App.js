import React from "react";
import Layout from "./components/Layout/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Route, Switch, Redirect} from "react-router-dom";

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
  faCopyright

} from "@fortawesome/free-solid-svg-icons";

import Dashboard from "./components/Dashboard/index";
import AddMember from "./components/AddMember/index";
import MembersList from "./components/MembersList/index";
import Home from "../src/Home/index";
import Footer from "./components/Footer/index";
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
  faCopyright

);
function App() {
  return (
    <>
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/">
      <Layout />
      
        <div className="route-wrapper">
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/members/new" component={AddMember} />
          <Route exact path="/members/list" component={MembersList}></Route>
          <Route exact path="/groups/list" component={GroupList}></Route>
          <Route exact path="/users/new" component={AddUser}></Route>
          <Route exact path="/users/list" component={UserList}></Route>
          <Route exact path="/groups/new" component={CreateGroup}></Route>
          <Redirect from="/" to="/dashboard"/>
        </div>
        </Route>
        <Route>
          <div>Not Found</div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
