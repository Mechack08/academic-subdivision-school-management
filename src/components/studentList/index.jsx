import React from "react";
import "./studentList.css";

const StudentList = ({ data }) => {
  return (
    <div className="studentList-container">
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
    </div>
  );
};

export default StudentList;
