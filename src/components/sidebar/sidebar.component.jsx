import React from "react";
import "./sidebar.styles.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="compose">
        <button className="compose-btn">
          <div className="compose-img"></div>
          <div> Compose</div>
        </button>
      </div>
      <div className="options-list">
        <ul>
          <li>
            <span className="icon">
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/inbox_black_20dp.png"
                alt="inbox"
              />
            </span>
            <span className="title">Inbox</span>
            <span className="number">661</span>
          </li>

          <li>
            <span className="icon">
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/grade_black_20dp.png"
                alt="inbox"
              />
            </span>
            <span className="title">Starred</span>
          </li>

          <li>
            <span className="icon">
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/watch_later_black_20dp.png"
                alt="inbox"
              />
            </span>
            <span className="title">Snoozed</span>
          </li>

          <li>
            <span className="icon">
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/send_black_20dp.png"
                alt="inbox"
              />
            </span>
            <span className="title">Sent</span>
          </li>

          <li>
            <span className="icon">
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/insert_drive_file_black_20dp.png"
                alt="inbox"
              />
            </span>
            <span className="title">Drafts</span>
            <span className="number">20</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
