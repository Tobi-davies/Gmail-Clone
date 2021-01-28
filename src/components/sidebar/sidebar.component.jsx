import React from "react";
import "./sidebar.styles.css";
import { Link } from "react-router-dom";

const SideBar = ({ shouldMessageShow }) => {
  // const handleClose = () => {
  //   shouldMessageShow(true);
  // };

  const handleClick = () => {
    shouldMessageShow(false);
  };
  return (
    <div className="sidebar">
      <div className="compose">
        <button className="compose-btn" onClick={handleClick}>
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

          <Link to="/starred">
            <li>
              <span className="icon">
                <img
                  src="https://www.gstatic.com/images/icons/material/system/1x/grade_black_20dp.png"
                  alt="inbox"
                />
              </span>
              <span className="title">Starred</span>
            </li>
          </Link>

          <li>
            <span className="icon">
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/watch_later_black_20dp.png"
                alt="inbox"
              />
            </span>
            <span className="title">Snoozed</span>
          </li>

          <Link to="/sent">
            <li>
              <span className="icon">
                <img
                  src="https://www.gstatic.com/images/icons/material/system/1x/send_black_20dp.png"
                  alt="inbox"
                />
              </span>
              <span className="title">Sent</span>
            </li>
          </Link>

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
                src="https://www.gstatic.com/images/icons/material/system/1x/hangout_black_20dp.png"
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
      <div className="meet">
        <p>Meet</p>
        <ul>
          <li>
            <span className="icon">
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/videocam_black_20dp.png"
                alt="inbox"
              />
            </span>
            <span className="title">New meeting</span>
          </li>
          <li>
            <span className="icon">
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/keyboard_black_20dp.png"
                alt="inbox"
              />
            </span>
            <span className="title">Join a meeting</span>
          </li>
        </ul>
      </div>
      <div className="hangout">
        <p>Hangouts</p>
        <div className="hangout-flex">
          <span className="T">
            <div>T</div>
          </span>
          <span className="name">Tobiloba</span>
          <span className="arrow-down">
            <i class="fas fa-sort-down"></i>
          </span>
          <span className="cross">
            <img
              src="https://www.gstatic.com/images/icons/material/system/1x/add_grey600_24dp.png"
              alt="icon"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
