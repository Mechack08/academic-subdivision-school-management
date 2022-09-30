import React from "react";
import HighLightBox from "../highLightBox";
import "./highLightSchool.css";

const HighLightSchool = () => {
  return (
    <div className="highlightSchool-container">
      <HighLightBox
        title="Total des élèves"
        total="625"
        gents="390"
        ladies="235"
        trend="up"
      />
      <HighLightBox
        title="Finalistes"
        total="64"
        gents="30"
        ladies="34"
        trend="down"
      />
    </div>
  );
};

export default HighLightSchool;
