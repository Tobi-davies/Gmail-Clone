import React from "react";
import "./sent-messages.styles.css";

const SentMessages = ({ item }) => {
  return (
    <div className="message-list">
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
      <p className="message-title">To: {item.to}</p>
      <p className="message-body">
        {item.subject} - {item.body}
      </p>
      <p className="date">{item.month}</p>
    </div>
  );
};

export default SentMessages;
