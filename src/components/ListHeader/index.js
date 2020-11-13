import React from "react";
import "./index.scss";


const ListHeader = ({total, page}) => {
  return <div className="list__header">
    <div>{total.number + " " + total.unit}</div>
    <div>{page.current + " / " + page.total}</div>
  </div>
}


export default ListHeader;