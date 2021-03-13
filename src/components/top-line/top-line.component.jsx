import React from "react";
import "./top-line.styles.css";

const TopLine = () => {
  return (
    <div className="top-line">
      <div className="left">
        <span className="square">
          <i className="far fa-square"></i>
        </span>
        <span className="arrow-down">
          <i className="fas fa-caret-down"></i>
        </span>
        <span className="reload">
          <i className="fas fa-redo-alt"></i>
        </span>
        <span className="three-dot">
          <i className="fas fa-ellipsis-v"></i>
        </span>
      </div>
      <div className="right">
        <span className="fifty">1-50 of 200</span>
        <span className="less">
          <i className="fas fa-less-than"></i>
        </span>
        <span className="greater">
          <i className="fas fa-greater-than"></i>
        </span>
        <span className="keyboard">
          <i className="fas fa-keyboard"></i>
        </span>
        <span className="arrow-down">
          <i className="fas fa-caret-down"></i>
        </span>
      </div>
    </div>
  );
};

export default TopLine;
