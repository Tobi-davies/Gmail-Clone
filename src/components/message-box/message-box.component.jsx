import React from "react";
import "./message-box.styles.css";

const MessageBox = ({ showMessage, shouldMessageShow }) => {
  const handleClose = () => {
    shouldMessageShow(true);
  };

  return (
    <div className={!showMessage ? "message-box display-box" : "message-box"}>
      <div className="new-message-head">
        <p>New Message</p>
        <div className="new-message-icons">
          <i class="fas fa-minus"></i>
          <i class="fas fa-expand-alt"></i>
          <i class="fas fa-times close" onClick={handleClose}></i>
        </div>
      </div>
      <div className="inner">
        <div className="to">
          <input type="text" name="text" id="text" placeholder="To" />
        </div>
        <div className="subject">
          <input type="text" name="text" id="text" placeholder="Subject" />
        </div>
        <div className="message-body">
          <textarea name="body" id="body" rows="19"></textarea>
        </div>

        <div className="message-bottom">
          <div className="send-btn">
            <button>
              <span className="send">Send</span>
              <span className="send-icon">
                <i class="fas fa-caret-down"></i>
              </span>
            </button>
          </div>
          <div className="message-icons">
            <span>
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/text_format_black_20dp.png"
                alt="icon"
              />
            </span>

            <span>
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/attach_file_black_20dp.png"
                alt="icon"
              />
            </span>

            <span>
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/insert_link_black_20dp.png"
                alt="icon"
              />
            </span>

            <span>
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/insert_emoticon_black_20dp.png"
                alt="icon"
              />
            </span>

            <span>
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/drive_black_20dp.png"
                alt="icon"
              />
            </span>

            <span>
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/insert_photo_black_20dp.png"
                alt="icon"
              />
            </span>

            <span>
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/lock_clock_black_20dp.png"
                alt="icon"
              />
            </span>
          </div>
          <div className="right-icon">
            <span>
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/more_vert_black_20dp.png"
                alt="icon"
              />
            </span>

            <span>
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/delete_black_20dp.png"
                alt="icon"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
