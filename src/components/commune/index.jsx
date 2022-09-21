import React from "react";
import Input from "../input";
import "./commune.css";

const Commune = () => {
  return (
    <div className="commune-container">
      <Input placeholder="Ex. Melekera" lblName="Commune" name="commune" />
      <div className="btn">
        <button className="submit-btn">Enregistrer</button>
      </div>
    </div>
  );
};

export default Commune;
