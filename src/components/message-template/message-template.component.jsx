import React from "react";
import "./message-template.styles.css";
import { withRouter } from "react-router-dom";

const MessageTemplate = ({ data, match, history }) => {
  console.log(match);

  const handleClick = () => {
    history.push("/starred");
  };

  return (
    <div className="message-template">
      <span className="square">
        <i className="far fa-square"></i>
      </span>
      <button className="star" onClick={handleClick}>
        <i className="far fa-star"></i>
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
