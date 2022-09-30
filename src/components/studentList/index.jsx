import React from "react";
import "./studentList.css";

const StudentList = ({ data, division }) => {
  return (
    <div className="studentList-container">
      {division ? (
        <table className="list-table">
          <thead>
            <tr>
              <th>Numero</th>
              <th>Noms complet</th>
              <th>Institutions</th>
              <th>Niveau</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student) => {
              return (
                <tr id={student.id}>
                  <td>{student.id}</td>
                  <td>
                    {student.name} {student.postname} {student.lastname}
                  </td>
                  <td>{student.school.name}</td>
                  <td>{student.school.type}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <table className="list-table">
          <thead>
            <tr>
              <th>Numero</th>
              <th>Nom</th>
              <th>Postnom</th>
              <th>Prenom</th>
              <th>Niveau</th>
              <th>Option / Section</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student) => {
              return (
                <tr id={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.postname}</td>
                  <td>{student.lastname}</td>
                  <td>{student.class.niveau}</td>
                  <td>{student.option.name}</td>
                  <td>67%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;
