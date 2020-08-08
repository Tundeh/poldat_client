import React from "react";
import { NavLink } from "react-router-dom";

import NavIcon from "../NavIcon/index";
import './index.scss';

const NavItem = (props) => {
  let itemTitle = props.item.title;
  if (props.item.icon) {
    itemTitle = <span className="nav-item-title">{props.item.title}</span>;
  }

  return (
    <li className='nav-li-item'>
      <NavLink to={props.item.url} exact={true} className='nav-link'>
        <NavIcon item={props.item} />
        {itemTitle}
      </NavLink>
    </li>
  );
};

export default NavItem;
