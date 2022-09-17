import React from "react";
import "./asidebar.css";
import {
  MdDashboard,
  MdSchool,
  MdPeopleAlt,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Asidebar = ({ location }) => {
  return (
    <div className="asidebar-container">
      <span className="logo">LOGO SD BBO</span>
      <ul className="list-items">
        <li className={location === "/" ? "active" : ""}>
          <MdDashboard className="menu-icon" />
          <Link to="/">Tableu de bord</Link>
        </li>
        <li className={location === "/ecoles" ? "active" : ""}>
          <MdSchool className="menu-icon" />
          <Link to="/ecoles">Ecoles</Link>
        </li>
        <li className={location === "/eleves" ? "active" : ""}>
          <MdPeopleAlt className="menu-icon" />
          <Link to="/eleves">Eleves</Link>
        </li>
        <li className={location === "/parametres" ? "active" : ""}>
          <MdSettings className="menu-icon" />
          <Link to="/parametres">Parametre</Link>
        </li>
      </ul>
      <div className="show-status">
        <div className="profile-pic">
          <img src="./assets/profil-image.jpg" alt="profile-pic" />
        </div>
        <span>
          Bonjour, <strong>Clara M.</strong>
        </span>
        <div className="logout">
          <span>
            <MdLogout className="logout-icon" />
            <a href="#">Deconnexion</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Asidebar;
