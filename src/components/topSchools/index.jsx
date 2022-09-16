import React from "react";
import Ecoles from "../ecoles";
import "./topschool.css";
import { schools } from "../../data";

const TopSchools = ({ showModal, getOneSchool }) => {
  const secondaries = schools.filter((s) => s.category.name === "Secondaire");
  secondaries.length = 5;

  const primaries = schools.filter((p) => p.category.name === "Primaire");
  primaries.length = 5;

  return (
    <div className="topschool-container">
      <div className="school-section">
        <h1 className="title">Top 5 Secondaires populaires</h1>
        <Ecoles
          data={secondaries}
          showModal={showModal}
          getOneSchool={getOneSchool}
        />
      </div>
      <div className="school-section">
        <h1 className="title">Top 5 Primaires populaires</h1>
        <Ecoles
          data={primaries}
          showModal={showModal}
          getOneSchool={getOneSchool}
        />
      </div>
    </div>
  );
};

export default TopSchools;
