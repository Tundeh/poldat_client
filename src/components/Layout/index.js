import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import windowSize from "react-window-size";
import propTypes from "prop-types";

import * as actions from "../../redux/actions/navigationActions";
import "./index.scss";
import Navigation from "./Navigation/index";
import NavLogo from "./NavLogo/index";
import OutsideClick from "./Navigation/OutsideClick/index";
import Aux from "../Auxs/index";

const Layout = (props) => {
  let layoutContent;

  const [mobileClass, setmobileClass] = useState("Nav-bar hide");
  const handleOutsideClick = () => {
    props.onToggleNavigation(props.collapse_menu);
  }

    useEffect(() => 
    {
  if(props.collapse_menu){
    
    setmobileClass("Nav-bar active");
   
  } else {
    setmobileClass("Nav-bar hide");
  }

}, [props.collapse_menu])



  if (props.windowWidth < 991) {

    layoutContent = 
      <>
         <NavLogo />
        <div className={mobileClass}>
          <Navigation />
        </div>
        {
            props.collapse_menu?
          <OutsideClick onClick={handleOutsideClick}/>:<></>
  }
      </>
    
  } else {
    if(props.collapse_menu){
      props.onToggleNavigation(true);
    }
    layoutContent = 
      <div className="Nav-bar">
        <NavLogo />
        <Navigation />
      </div>
    
  }

  return <Aux>
   {layoutContent}
  </Aux>
  
};

Layout.propTypes = {
  collapse_menu: propTypes.bool.isRequired,
  onToggleNavigation: propTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    collapse_menu: state.navigationReducer.collapse_menu
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleNavigation: bindActionCreators(actions.collapseMenu, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(windowSize(Layout));
