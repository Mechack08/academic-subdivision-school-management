import React from "react";
import "./ecoles.css";
import { useLocation } from "react-router-dom";
import { MdDelete, MdRemoveRedEye } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Ecoles = ({ data, showModal, getOneSchool }) => {
  const location = useLocation().pathname;

  return (
    <div className="ecoles-container">
      <table>
        <thead>
          <tr className="header">
            <th>Code</th>
            <th>Nom de l'institution</th>
            <th>Regime</th>
            {location === "/" ? (
              <>
                <th>Commune</th>
                <th>Quartier</th>
                <th>Eleves</th>
              </>
            ) : (
              <th>Actions</th>
            )}
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
                {location === "/" ? (
                  <>
                    <td>{school.commune.name}</td>
                    <td>{school.quartier.name}</td>
                    <td>{school.learners.total}</td>
                  </>
                ) : (
                  <td className="btns">
                    <button className="view">
                      <MdRemoveRedEye className="icon view" />
                      <span>Details</span>
                    </button>
                    <button className="edit">
                      <FaEdit className="icon edit" />
                      <span>Modifier</span>
                    </button>
                    <button className="delete">
                      <MdDelete className="icon delete" />
                      <span>Supprimer</span>
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Ecoles;
