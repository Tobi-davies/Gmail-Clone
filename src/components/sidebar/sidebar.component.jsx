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

          <li>
            <span className="icon">
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/label_important_black_20dp.png"
                alt="inbox"
              />
            </span>
            <span className="title">Important</span>
          </li>

          <li>
            <span className="icon">
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/label_important_black_20dp.png"
                alt="inbox"
              />
            </span>
            <span className="title">Chats</span>
          </li>

          <li>
            <span className="icon">
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/schedule_send_black_20dp.png"
                alt="inbox"
              />
            </span>
            <span className="title">Scheduled</span>
          </li>

          <li>
            <span className="icon">
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/mail_black_20dp.png"
                alt="inbox"
              />
            </span>
            <span className="title">All Mail</span>
          </li>

          <li>
            <span className="icon">
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/report_black_20dp.png"
                alt="inbox"
              />
            </span>
            <span className="title">Spam</span>
            <span className="number">2</span>
          </li>

          <li>
            <span className="icon">
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/delete_black_20dp.png"
                alt="inbox"
              />
            </span>
            <span className="title">Trash</span>
          </li>

          <li>
            <span className="icon">
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/inbox_gm_googlered600_20dp.png"
                alt="inbox"
              />
            </span>
            <span className="title">Create new label</span>
          </li>

          <li>
            <span className="icon manage-icon">
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/settings_black_20dp.png"
                alt="inbox"
              />
            </span>
            <span className="title">Manage labels</span>
          </li>

          <li>
            <span className="icon">
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/add_black_20dp.png"
                alt="inbox"
              />
            </span>
            <span className="title">Create new label</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
