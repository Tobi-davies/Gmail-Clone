import React from "react";
import "./composeBtn.styles.css";
import { Link } from "react-router-dom";

const ComposeBtn = () => {
  return (
    <Link to="compose">
      <button className="mobile-compose-btn">
        <img
          src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
          alt="imageBtn"
        />
      </button>
    </Link>
  );
};

export default ComposeBtn;
