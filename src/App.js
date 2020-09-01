import React from "react";
import Layout from "./components/Layout/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Route, Switch } from "react-router-dom";
import {
  faUser,
  faDatabase,
  faPlusSquare,
  faHome,
  faUsers,
  faAddressBook,
  faUserPlus,
  faShareAlt,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";

import Dashboard from "./components/Dashboard/index";
import AddMember from "./components/AddMember/index";
import Footer from "./components/Footer/index";
import "./App.scss";



library.add(
  faUser,
  faDatabase,
  faPlusSquare,
  faHome,
  faUsers,
  faAddressBook,
  faUserPlus,
  faShareAlt,
  faCalendarAlt
);
function App() {
  return <>
  <Layout/>
  <Switch>
  <div className="route-wrapper">
  <Route exact path="/dashboard" component={Dashboard}/>
  <Route exact path="/members/new" component={AddMember}/>
  </div>
  </Switch>
  <Footer/>
  </>
  ;
}

export default App;
