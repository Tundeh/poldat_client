import React from "react";

import './index.scss';
import NavItem from "../Navitem/index";
import NavCollapse from "../NavCollapse/index";

const NavGroup = (props) => {
  let navItems;
  if (props.group.children) {
    const groups = props.group.children;
    navItems = Object.keys(groups).map((item) => {
      item = groups[item];
      switch (item.type) {
        case "collapse":
          return <NavCollapse key={item.id} collapse={item} />;
        case "item":
          return <NavItem key={item.id} item={item} />;
        default:
          return false;
      }
    });
    return (
      <>
        <li className='nav-group-label'>
          <label key={props.group.id}>
            {props.group.title}
          </label>
        </li>
        {navItems}
      </>
    );
  }
};

export default NavGroup;
