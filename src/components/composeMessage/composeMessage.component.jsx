import React, { useState } from "react";
import "./composeMessage.styles.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiPaperclip } from "react-icons/bi";
import { BiSend } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link, withRouter } from "react-router-dom";
import { addSent } from "../../redux/outbox/outbox.actions";
import { connect } from "react-redux";

const ComposeMessage = ({ addSent, history, match }) => {
  let monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formatDate = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };

  let today = new Date();
  let date = formatDate(today.getDate());
  let month = monthList[today.getMonth()];
  let timeSent = `${month} ${date}`;

  const [composeDetails, setComposeDetails] = useState({
    to: "",
    subject: "",
    body: "",
    month: timeSent,
  });

  const { to, subject, body } = composeDetails;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setComposeDetails({ ...composeDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (to !== "" && body !== "" && subject !== "") {
      addSent(composeDetails);
    }

    history.push("/");
  };

  return (
    <div className="compose-message">
      <div className="top-links">
        <div className="top-links-left">
          <Link to="/">
            <AiOutlineArrowLeft className="compose-icon" />
          </Link>
          <p>Compose</p>
        </div>
        <div className="top-links-right">
          <BiPaperclip className="compose-icon" />
          <BiSend className="compose-icon" onClick={handleSubmit} />
          <BsThreeDotsVertical className="compose-icon" />
        </div>
      </div>
      <form className="compose-message-body">
        <div className="from-container">
          <input type="text" className="from-input" />
          <p>From</p>
        </div>
        <div className="to-container">
          <input
            type="text"
            className="to-input"
            name="to"
            value={to}
            onChange={handleChange}
          />
          <p>To</p>
        </div>
        <div className="subject-container">
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={handleChange}
            className="subject-input"
            placeholder="Subject"
            required
          />
        </div>
        <textarea
          name="body"
          value={body}
          onChange={handleChange}
          placeholder="Compose email"
          required
        ></textarea>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addSent: (sent) => dispatch(addSent(sent)),
});

export default withRouter(connect(null, mapDispatchToProps)(ComposeMessage));
