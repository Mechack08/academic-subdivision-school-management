import React from "react";
import HighLightBox from "../highLightBox";
import HighLightSchool from "../highLightSchool";
import Navbar from "../Navbar";
import StudentList from "../studentList";
import { students } from "../../data";
import "./realSchool.css";
import { useState } from "react";
import { useEffect } from "react";

const RealSchool = () => {
  const studentsList = students.filter(
    (st) => st.school.name === "Institut Vungi"
  );

  return (
    <div className="home-container">
      <div className="principal">
        <Navbar
          title="Institut de l'avenir de Butembo"
          dataHour="Mercredi 07 Septembre 2022 | 14h55"
        />
        <div className="main">
          <HighLightSchool />
          <div className="best-student">
            <h1 className="title">Nos meilleurs élèves (Top 10)</h1>
            <StudentList data={studentsList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealSchool;
