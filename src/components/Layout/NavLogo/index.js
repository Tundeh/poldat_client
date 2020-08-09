import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./index.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import windowSize from "react-window-size";
import propTypes from "prop-types";
import * as navigationActions from "../../../redux/actions/navigationActions";

const NavLogo = ({onToggleNavigation, collapse_menu, windowWidth}) => {
const [toggleClass, setToggleClass] = useState("toggle-btn");
let content;

//this function handles the mobile Toggle button
const handleClick = () => {
onToggleNavigation(collapse_menu)
}

useEffect(() => {
 if(collapse_menu){
  setToggleClass("toggle-btn on")
 } else {
  setToggleClass("toggle-btn");
 }
}, [collapse_menu])

if(windowWidth < 991) {
  content =  <>
  <div className="nav-logo">
    <a href="Blank" className="b-brand">
      <div className="b-bgr">
        <FontAwesomeIcon icon='database'/>
      </div>
      <span className="b-title">Poldat</span>
    </a>
    <a href="#!" onClick={handleClick} className={toggleClass}>
      <span />
    </a>
  </div>
</>
} else {

 content = <>
  <div className="nav-logo">
    <a href="Blank" className="b-brand">
      <div className="b-bgr">
        <FontAwesomeIcon icon='database'/>
      </div>
      <span className="b-title">Poldat</span>
    </a>
    <a href="#!" className={toggleClass}>
      <span />
    </a>
  </div>
</>
}

  return (
   content
  );
};

NavLogo.propTypes = {
  collapse_menu: propTypes.bool.isRequired,
  onToggleNavigation: propTypes.func.isRequired

}

function mapStateToProps(state) {
  return {
    collapse_menu: state.navigationReducer.collapse_menu

  }

}

function mapDispatchToProps (dispatch) {
  return {
   
    onToggleNavigation: 
    bindActionCreators(navigationActions.collapseMenu, dispatch)
    }
  
}
export default connect(mapStateToProps, mapDispatchToProps)(windowSize(NavLogo));
