import React from "react";
import "./ecoles.css";

const Ecoles = ({ data, showModal, getOneSchool }) => {
  return (
    <div className="ecoles-container">
      <table>
        <thead>
          <tr className="header">
            <th>Code</th>
            <th>Nom de l'institution</th>
            <th>Regime</th>
            <th>Commune</th>
            <th>Quartier</th>
            <th>Eleves</th>
          </tr>
        </thead>
        <tbody>
          {data.map((school) => {
            return (
              <tr
                key={school.id}
                onClick={() => {
                  showModal();
                  getOneSchool(school.id);
                }}
              >
                <td>{school.id}</td>
                <td>{school.name}</td>
                <td>{school.regime}</td>
                <td>{school.commune.name}</td>
                <td>{school.quartier.name}</td>
                <td>{school.learners.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Ecoles;
