import React from "react";
import Serchbar from "../serchBar";
import { FaBell } from "react-icons/fa";
import "./navbar.css";

const Navbar = ({ title, dataHour }) => {
  return (
    <div className="navbar-container">
      <div className="navbar-header">
        <h1>{title}</h1>
        <span>{dataHour}</span>
      </div>
      <div className="navbar-body">
        <span className="msg">
          <FaBell />
        </span>
        <Serchbar />
      </div>
    </div>
  );
};

export default Navbar;
