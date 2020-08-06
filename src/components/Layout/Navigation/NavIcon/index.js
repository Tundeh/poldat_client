import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './index.scss';

const NavIcon = (props) => {
  let navIcons = false;
  if(props.item.icon){
      navIcons = <span className="nav-icon">
       <FontAwesomeIcon  icon={props.item.icon}/>
      </span>
  }
  return navIcons;
  
}

export default NavIcon;