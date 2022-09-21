import React from "react";
import Input from "../input";
import "./quarter.css";

const Quarter = () => {
  return (
    <div className="quarter-container">
      <Input placeholder="Ex. Kitatumba" lblName="Quartier" name="quarter" />
      <div className="btn">
        <button className="submit-btn">Enregistrer</button>
      </div>
    </div>
  );
};

export default Quarter;
