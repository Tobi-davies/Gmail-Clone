import React from "react";
import "./message-template.styles.css";
import { withRouter } from "react-router-dom";

const MessageTemplate = ({ data, history }) => {
  console.log(history);

  return (
    <div className="message-template">
      <span className="square">
        <i class="far fa-square"></i>
      </span>
      <button className="star">
        <i class="far fa-star"></i>
      </button>
      <p className="message-title">{data.name}</p>
      <p className="message-body">
        na him be this oh, I just dey try practice this wrap thing sef... omo
        oti fe ma stress aye me mehn, like wtf is going on....cant I just blow
        with code
      </p>
      <p className="date">26 Jan</p>
    </div>
  );
};

export default withRouter(MessageTemplate);
