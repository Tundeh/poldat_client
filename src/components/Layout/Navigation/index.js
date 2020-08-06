import React from "react";
import windowSize from "react-window-size";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PerfectScrollbar from "react-perfect-scrollbar";
import propTypes from "prop-types";

import * as actions from "../../../redux/actions/navigationActions";
import NavGroup from "./NavGroup/index";
import navigation from "../../../menu-items";
import NavItem from "./Navitem/index";
import "./index.scss";
import "react-perfect-scrollbar/dist/css/styles.css";

const NavContent = (props) => {
  let items;
  
  items = navigation.items.map((item) => {
    switch (item.type) {
      case "group":
        return <NavGroup key={item.id} group={item} />;
      case "item":
        return <NavItem key={item.id} item={item} />;

      default:
        return false;
    }
  });

  return (
    <div className="navbar-items-wrapper">
      <PerfectScrollbar backgroundColor="transparent" component="div">
        
      <ul className="navbar-items">{items}</ul>
      
      </PerfectScrollbar>
    </div>
  );
};

NavContent.propTypes = {
  collapse_menu: propTypes.bool.isRequired,
  onToggleNavigation: propTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    collapse_menu: state.collapse_menu
  }
} 

function mapDispatchToProps(dispatch) {
  return {
    onToggleNavigation: bindActionCreators(actions.collapseMenu, dispatch)

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(windowSize(NavContent));
