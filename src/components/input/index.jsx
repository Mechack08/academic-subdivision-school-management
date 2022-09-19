import React from "react";
import "./input.css";

const Input = ({ lblName, name, type, placeholder }) => {
  return (
    <div className="input-container">
      {lblName && <label htmlFor={name}>{lblName}</label>}
      {type ? (
        <input type={type} name={name} id={name} placeholder={placeholder} />
      ) : (
        <input type="text" name={name} id={name} placeholder={placeholder} />
      )}
    </div>
  );
};

export default Input;
