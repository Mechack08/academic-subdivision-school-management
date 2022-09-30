import React from "react";
import "./highLightBox.css";
import {
  BsArrowUpRightCircleFill,
  BsArrowDownLeftCircleFill,
} from "react-icons/bs";

const HighLightBox = ({ title, total, ladies, gents, trend }) => {
  return (
    <div className="box-display">
      <span className="box-title">{title}</span>
      <div className="box-number">
        <span className="box-number-student">{total}</span>
        {trend === "up" ? (
          <BsArrowUpRightCircleFill className="box-icon up" />
        ) : (
          <BsArrowDownLeftCircleFill className="box-icon down" />
        )}
      </div>
      <div className="box-amount">
        <span className="box-amount-gars">Garcons: {gents}</span>
        <span className="box-amount-filles">Filles: {ladies}</span>
      </div>
    </div>
  );
};

export default HighLightBox;
