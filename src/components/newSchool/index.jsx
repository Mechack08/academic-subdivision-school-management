import React from "react";
import Input from "../input";
import "./newSchool.css";

const NewSchool = ({ modal }) => {
  return (
    <div className="newSchool-container">
      <div className="header">
        <h1>Ajouter une nouvelle institution</h1>
      </div>
      <div className="main">
        <div className="school">
          <Input
            lblName="Nom de l'institution"
            name="name"
            placeholder="Ex. Institut X"
          />
          <Input
            lblName="Regime de l'institution"
            name="regime"
            placeholder="Ex. Convention"
          />
          <Input
            lblName="Boite postale de l'institution"
            name="pobox"
            placeholder="Ex. BP187NK"
          />
          <Input
            lblName="Date de creation de l'institution"
            name="date"
            placeholder="La date de creation de l'institution"
            type="date"
          />
        </div>
        <div className="more">
          <div className="body">
            <div className="category">
              <div className="sec">
                <input type="radio" name="school-category" id="sec" value="1" />
                <label htmlFor="sec">Secondaire</label>
              </div>
              <div className="prim">
                <input type="radio" name="school-category" id="pri" value="2" />
                <label htmlFor="pri">Primaire</label>
              </div>
            </div>
            <div className="leader">
              <Input
                placeholder="Ex. BT0017"
                name="id"
                lblName="ID du dirigeant"
              />
              <div className="infos">
                <div className="info">
                  <span className="title">Noms : </span>
                  <span>Musubao Waliko Jean Seseke kuku</span>
                </div>
                <div className="info">
                  <span className="title">Age : </span>
                  <span>56 ans</span>
                </div>
                <div className="info">
                  <span className="title">Nationalite : </span>
                  <span>Congolaise</span>
                </div>
              </div>
            </div>
            <div className="address">
              <select name="com" id="com">
                <option value="">Choisir une commune</option>
                <option value="1">Mulekera</option>
                <option value="2">Kimemi</option>
              </select>
              <select name="quart" id="quart">
                <option value="">Choisir un quartier</option>
                <option value="1">Vungi</option>
                <option value="2">Kambali</option>
                <option value="2">Butenje</option>
              </select>
            </div>
            <button className="save">Enregistrer</button>
          </div>
          <div className="footer">
            <button onClick={() => modal(false)}>Fermer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSchool;
