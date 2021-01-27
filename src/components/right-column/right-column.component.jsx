import React from "react";
import "./right-column.styles.css";

const RightColumn = () => {
  return (
    <div className="right-column">
      <ul>
        <li>
          <span>
            <img
              src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png"
              alt="icon"
            />
          </span>
        </li>

        <li>
          <span>
            <img
              src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"
              alt="icon"
            />
          </span>
        </li>

        <li>
          <span>
            <img
              src="https://www.gstatic.com/companion/icon_assets/tasks2_2x.png"
              alt="icon"
            />
          </span>
        </li>

        <li>
          <span>
            <img
              src="https://www.gstatic.com/companion/icon_assets/contacts_2x.png"
              alt="icon"
            />
          </span>
        </li>

        <li className="dash">
          {" "}
          <span></span>
        </li>

        <li>
          <span>
            <img
              src="https://www.gstatic.com/images/icons/material/system/1x/add_grey600_24dp.png"
              alt="icon"
            />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default RightColumn;
