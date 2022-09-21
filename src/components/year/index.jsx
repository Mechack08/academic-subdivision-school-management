import React from "react";
import Input from "../input";
import "./year.css";

const Year = () => {
  return (
    <div className="year-container">
      <Input placeholder="Ex. 20XX-20YY" lblName="Annee scolaire" name="year" />
      <div className="btn">
        <button className="submit-btn">Enregistrer</button>
      </div>
    </div>
  );
};

export default Year;
