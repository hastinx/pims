import React from "react";

const MonitorStatusOpenClose = (props) => {
  return (
    <>
      <div className="d-flex flex-column bg-light p-1 border border-primary pshh-3001">
        <span className="txt-pshh-3001 p-1 text-center bg-dark fw-bolder text-white">
          {props.tag_name}
        </span>
        <span
          className={
            "indicator-pshh-3001 p-1 text-center fw-bold " +
            (props.status === 1 ? "bg-normal" : "bg-error")
          }
        >
          {props.status === 1 ? "OPEN" : "CLOSE"}
        </span>
      </div>
    </>
  );
};

export default MonitorStatusOpenClose;
