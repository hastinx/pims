import React from "react";
import WellOn from "../../assets/img/faceplate/well-on.png";
import WellOff from "../../assets/img/faceplate/well-off.png";
import "./well-summary.css";

const MasterWellSummaryWater = ({ tag, status }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center f-wrap">
      <img
        className="ws-indicator"
        src={WellOn}
        alt=""
      />
      <span className="ws-tag">{tag}</span>
    </div>
  );
};

export default MasterWellSummaryWater;
