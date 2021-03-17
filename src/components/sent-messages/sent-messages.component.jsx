import React from "react";
import "./sent-messages.styles.css";

const SentMessages = ({ item }) => {
  return (
    <div className="message-template message-list">
      <span className="square">
        <i className="far fa-square"></i>
      </span>
      <button className="star">
        {/* {!toggle ? (
          <img
            src="https://www.gstatic.com/images/icons/material/system/1x/star_googyellow500_20dp.png"
            alt="star"
          />
        ) : (
          <img
            src="https://www.gstatic.com/images/icons/material/system/1x/star_border_black_20dp.png"
            alt="star"
          />
        )} */}
        <i className="far fa-star"></i>
      </button>
      <p className="message-title">{item.to}</p>

      <div className="message-body">
        <div className="message-body-first">
          <span className="message-body-title">{item.subject}</span>
          <span className="dash">-</span>
          <span className="message-body-content">{item.body}</span>
        </div>
        <div className="date-icons">
          <img
            src="https://www.gstatic.com/images/icons/material/system/1x/archive_black_20dp.png"
            alt="download-icon"
          />
          <img
            src="https://www.gstatic.com/images/icons/material/system/1x/delete_black_20dp.png"
            alt="thrash-icon"
          />
          <img
            src="https://www.gstatic.com/images/icons/material/system/1x/mark_as_unread_black_20dp.png"
            alt="mail-open-icon"
          />
          <img
            src="https://www.gstatic.com/images/icons/material/system/1x/watch_later_black_20dp.png"
            alt="snooze-icon"
          />
        </div>
        <p className="date">{item.month}</p>
        {/* <p className="message-title">To: {item.to}</p>
      <p className="message-body">
        {item.subject} - {item.body}
      </p>
      <p className="date">{item.month}</p>  */}
      </div>
    </div>
  );
};

export default SentMessages;
