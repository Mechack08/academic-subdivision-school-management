import React from "react";
import "./leader.css";
import Input from "../input";

const Leader = () => {
  return (
    <div className="leader-container">
      <Input lblName="Nom" placeholder="Ex. Mukulengi" name="leaderName" />
      <Input lblName="Postnom" placeholder="Ex. Kakinaga" name="leaderPost" />
      <Input lblName="Prenom" placeholder="Ex. Jean" name="lastName" />
      <Input lblName="Date de naissance" name="leaderBirth" type="date" />
      <Input
        lblName="Nationalite"
        name="leaderCountry"
        placeholder="Ex. Congolaise"
      />
      <div className="radio-container">
        <span className="label">Genre</span>
        <div className="radio-btns">
          <div className="radio-btn">
            <input type="radio" name="sex" id="female" />
            <label htmlFor="female">Feminin</label>
          </div>
          <div className="radio-btn">
            <input type="radio" name="sex" id="male" />
            <label htmlFor="male">Masculin</label>
          </div>
        </div>
      </div>
      <div className="btn-save">
        <button className="submit-btn">Enregistrer</button>
      </div>
    </div>
  );
};

export default Leader;
