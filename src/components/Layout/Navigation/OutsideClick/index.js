import React from 'react';
import "./index.scss";

const OutsideClick = (props) => {

 return (
  <div className="Outside-click" onClick={props.onClick}>  
  </div>
  )
}

export default OutsideClick;