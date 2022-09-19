import React, { useState } from "react";
import Ecoles from "../ecoles";
import Serchbar from "../serchBar";
import "./school.css";
import { schools } from "../../data";
import { MdAdd } from "react-icons/md";
import NewSchool from "../newSchool";

const School = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  // toggle popup
  const showModal = () => {
    setShowPopUp(true);
  };

  return (
    <div className="school-container">
      {showPopUp && (
        <div className="popup-container show">
          <NewSchool modal={setShowPopUp} />
        </div>
      )}

      <div className="header">
        <div className="head">
          <h1>Liste des toutes les ecoles</h1>
          <button className="add" onClick={showModal}>
            <MdAdd className="icon" />
            Nouveau
          </button>
        </div>
        <div className="filters">
          <div className="box regime">
            <select name="regime" id="regime">
              <option value="">Choisir Category</option>
              <option value="1">Primaire</option>
              <option value="2">Secondaire</option>
            </select>
          </div>
          <div className="box commune">
            <select name="regime" id="regime">
              <option value="">Regime</option>
              <option value="1">Catolique</option>
              <option value="1">Prive</option>
              <option value="1">Protestant</option>
            </select>
          </div>
          <div className="box quartier">
            <select name="regime" id="regime">
              <option value="">Regime</option>
              <option value="1">Catolique</option>
              <option value="1">Prive</option>
              <option value="1">Protestant</option>
            </select>
          </div>
          <div className="box quartier">
            <select name="regime" id="regime">
              <option value="">Regime</option>
              <option value="1">Catolique</option>
              <option value="1">Prive</option>
              <option value="1">Protestant</option>
            </select>
          </div>
          <Serchbar />
        </div>
      </div>
      <div className="main">
        <Ecoles data={schools} />
      </div>
    </div>
  );
};

export default School;
