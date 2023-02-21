import React from "react";
import WellOn from "../../assets/img/faceplate/well-on.png";
import WellOff from "../../assets/img/faceplate/well-off.png";
import "./well-summary.css";

const MasterWellSummary = ({ tag, status }) => {
  return (
    <div className="d-flex flex-column f-wrap">
      <img
        className="ws-indicator"
        src={status === 1 ? WellOn : WellOff}
        alt=""
      />
      <span className="ws-tag">{tag}</span>
    </div>
  );
};

export default MasterWellSummary;
