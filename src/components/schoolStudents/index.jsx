import React from "react";
import Serchbar from "../serchBar";
import StudentList from "../studentList";
import "./schoolStudents.css";
import { students } from "../../data";

const SchoolStudents = () => {
  return (
    <div className="scStudents-container">
      <div className="header">
        <h1 className="title right-title">Liste de tous les eleves.</h1>
        <button className="add-new">Inscrire</button>
      </div>
      <div className="body">
        <div className="serch-zone">
          <Serchbar />
        </div>
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
              <option value="">Par Niveau de classe</option>
              <option value="">Première année</option>
              <option value="">Deuxième année</option>
              <option value="">Troisième année</option>
            </select>
          </div>
          <div className="filter">
            <select name="" id="">
              <option value="">Par Option / Section</option>
              <option value="">Commerçiale et Gestion</option>
              <option value="">Latin & Philosophie</option>
              <option value="">Nutrition</option>
            </select>
          </div>
        </div>
        <StudentList data={students} />
      </div>
    </div>
  );
};

export default SchoolStudents;
