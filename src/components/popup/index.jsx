import React from "react";
import "./popup.css";

const Popup = ({ closeModal, school }) => {
  let category =
    school[0].category.name === "Secondaire" ? "Eleves" : "Ecoliers";
  return (
    <div className="popup-content">
      <button onClick={() => closeModal(false)}>X</button>
      <div className="header">
        <h1>{school.length ? school[0].name : "Pas de source"}</h1>
        <span className="regime">
          Regime : <span className="child">{school[0].regime}</span>
        </span>
        <span className="postal">
          Boite Postale : <span className="child">{school[0].pobox}</span>
        </span>
        <span className="created">
          Date de creation :{" "}
          <span className="child">{school[0].created_date}</span>
        </span>
      </div>
      <div className="body">
        <span className="details">Plus de details</span>
        <div className="part-one">
          <span className="students">
            {category} : <span className="nbr">{school[0].learners.total}</span>
          </span>
          <span className="girls">
            Filles : <span className="nbr">{school[0].learners.filles}</span>
          </span>
          <span className="girls">
            Garcons : <span className="nbr">{school[0].learners.garcons}</span>
          </span>
          <span className="year">
            Annee Scolaire :{" "}
            <span className="nbr">{school[0].learners.annee}</span>
          </span>
        </div>
        <div className="part-two">
          <span className="title">Derigeant</span>
          <div className="infos">
            <span className="name">
              Nom : <span className="info">{school[0].dirigeant.nom}</span>
            </span>
            <span className="name">
              Postnom :{" "}
              <span className="info">{school[0].dirigeant.postnom}</span>
            </span>
            <span className="name">
              Prenom :{" "}
              <span className="info">{school[0].dirigeant.prenom}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="footer">
        <span className="title">Adresse</span>
        <div className="details">
          <span>
            Commune: <span className="info">{school[0].commune.name}</span>
          </span>
          <span>
            Quartier: <span className="info">{school[0].quartier.name}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Popup;
