import React from "react";
import StudentList from "../studentList";
import "./student.css";
import { students } from "../../data";
import Serchbar from "../serchBar";

const Student = () => {
  return (
    <div className="student-container">
      <div className="header">
        <div className="title">
          <h1 className="right-title">Liste de tous les eleves et ecoliers</h1>
          <span>
            Vous pouvez filtrer les eleves en fonction de leurs ecoles, annees
            scolaire, etc... (Bref, en fonction de tous ces criteres
            disponibles.)
          </span>
        </div>
      </div>
      <div className="body">
        <div className="filters">
          <div className="filter">
            <select name="" id="">
              <option value="">Par Annee Scolaire</option>
              <option value="">2022-2023</option>
              <option value="">2021-2022</option>
              <option value="">2020-2021</option>
            </select>
          </div>
          <div className="filter">
            <select name="" id="">
              <option value="">Par Institution</option>
              <option value="">Secondaire</option>
              <option value="">Primaire</option>
              <option value="">Maternelle</option>
            </select>
          </div>
          <div className="filter">
            <select name="" id="">
              <option value="">Par Genre</option>
              <option value="">Masculin</option>
              <option value="">Feminin</option>
            </select>
          </div>
          <div className="filter">
            <select name="" id="">
              <option value="">Par Options</option>
              <option value="">Commercial & Gestion</option>
              <option value="">Biologie Chimie</option>
              <option value="">Mathematique Physique</option>
              <option value="">Latin Philosophie</option>
              <option value="">Construction</option>
            </select>
          </div>
          <div className="filter">
            <select name="" id="">
              <option value="">Par Classe</option>
              <option value="">Premiere</option>
              <option value="">Deuxieme</option>
              <option value="">Troisieme</option>
              <option value="">Quatrieme</option>
              <option value="">Cinquieme</option>
              <option value="">Sixieme</option>
            </select>
          </div>
          <div className="filter">
            <select name="" id="">
              <option value="">Par Commune</option>
              <option value="">Mulekera</option>
              <option value="">Kimemi</option>
              <option value="">Kisesa</option>
            </select>
          </div>
        </div>

        <div className="result">
          <p>
            Resultat de recherche : <span>7,895</span>
          </p>
          <Serchbar />
        </div>

        <div className="main">
          <StudentList data={students} division={true} />
        </div>
      </div>
    </div>
  );
};

export default Student;
