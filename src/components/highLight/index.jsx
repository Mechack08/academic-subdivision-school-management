import React from "react";
import "./highlight.css";
import HighLightBox from "../highLightBox";

const HighLight = () => {
  return (
    <div className="highlight-container">
      <HighLightBox
        title="Eleves & Ecoliers"
        total="12,756"
        ladies="1,186"
        gents="1,570"
        trend="up"
      />
      <HighLightBox
        title="Secondaires"
        total="2,756"
        ladies="1,186"
        gents="1,570"
        trend="up"
      />
      <HighLightBox
        title="Primaires"
        total="2,756"
        lladies="1,186"
        gents="1,570"
        trend="down"
      />
      <HighLightBox
        title="Finalistes"
        total="2,756"
        lladies="1,186"
        gents="1,570"
        trend="up"
      />
    </div>
  );
};

export default HighLight;
