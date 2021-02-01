import React, { useState } from "react";
import "./message-box.styles.css";
import { connect } from "react-redux";
import { addSent } from "../../redux/outbox/outbox.actions";

const MessageBox = ({ showMessage, shouldMessageShow, addSent }) => {
  // const [messageDetail, updateMessageDetail] = useState({
  //   to: "",
  //   subject: "",
  //   body: "",
  // });
  // console.log(messageDetail);

  // const { to, subject, body } = messageDetail;

  const [receiver, setTo] = useState("");
  const [topic, setSubject] = useState("");
  const [content, setBody] = useState("");

  // let first;
  // let second;
  // let third;

  const handleTo = (e) => {
    setTo(e.target.value);
  };

  const handleSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleBody = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // updateMessageDetail({
    //   to: receiver,
    //   subject: topic,
    //   body: content,
    // });

    const data = {
      to: receiver,
      subject: topic,
      body: content,
    };

    addSent({
      to: receiver,
      subject: topic,
      body: content,
    });
    console.log(data);
  };

  // console.log(receiver);

  // const handleChange = (event) => {
  //   // const { name, value } = event.target;

  //   updateMessageDetail({ [event.target.name]: event.target.value });
  // };

  const handleClose = () => {
    shouldMessageShow(true);
  };

  return (
    <div className={!showMessage ? "message-box display-box" : "message-box"}>
      <div className="new-message-head">
        <p>New Message</p>
        <div className="new-message-icons">
          <i className="fas fa-minus"></i>
          <i className="fas fa-expand-alt"></i>
          <i className="fas fa-times close" onClick={handleClose}></i>
        </div>
      </div>
      <form className="inner" onSubmit={handleSubmit}>
        <div className="to">
          <input
            type="text"
            name="to"
            onChange={handleTo}
            placeholder="To"
            required
          />
        </div>
        <div className="subject">
          <input
            type="text"
            name="subject"
            onChange={handleSubject}
            placeholder="Subject"
            required
          />
        </div>
        <div className="message-body">
          <textarea
            name="body"
            onChange={handleBody}
            rows="15"
            required
          ></textarea>
        </div>

        <div className="message-bottom">
          <div className="send-btn">
            <button type="submit">
              <span className="send">Send</span>
              <span className="send-icon">
                <i className="fas fa-caret-down"></i>
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
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addSent: (sent) => dispatch(addSent(sent)),
});

export default connect(null, mapDispatchToProps)(MessageBox);
