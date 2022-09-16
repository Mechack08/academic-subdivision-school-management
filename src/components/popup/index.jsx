import React from "react";
import "./popup.css";

const Popup = ({ closeModal, school }) => {
  return (
    <div className="popup-content">
      <button onClick={() => closeModal(false)}>X</button>
      <div className="header">
        <h1>{school.length ? school[0].name : "Pas de source"}</h1>
      </div>
      <div className="body"></div>
      <div className="footer">Made by 8pro.</div>
    </div>
  );
};

export default Popup;
