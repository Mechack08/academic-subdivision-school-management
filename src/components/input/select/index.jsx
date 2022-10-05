import React from "react";
import "./select.css";

const Select = (props) => {
  return (
    <select className="select-container">
      {props.filter && <option value="">{props.filter}</option>}
      {props?.children}
    </select>
  );
};

export default Select;
