import React from 'react';

import './index.scss';
import NavItem from '../Navitem/index';
import NavIcon from '../NavIcon/index';
import LoopNavCollapse from './index';


const NavCollapse = (props) => {
  let mainContent;
  let items;
  let itemTitle = props.collapse.title;
  if(this.props.collapse.icon) {
    itemTitle = <span className='nav-item-title'>{itemTitle}</span>
  }

  if(props.collapse.children) {
    const collapses = props.collapse.children;
     items = Object.keys(collapses).map((item) => {
      item = collapses[item];
      switch (item.type) {
        case 'collapse':
          return <LoopNavCollapse key={item.id} collapse={item}/>
        case 'item': 
         return <NavItem key={item.id} item={item}/>
        default:
          return false;
      }
    })
  }
  mainContent = (
    <>
    <a href='Blank' className='nav-collapse-title'>
      <NavIcon item={props.collapse}/>
      {itemTitle}
    </a>
    <ul>
      {items}
    </ul>
    </>
  )

return (
  <> 
  {mainContent}
  </>
)
}

export default NavCollapse;