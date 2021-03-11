import React, { useState } from "react";
import "./message-template.styles.css";
// import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addStarred } from "../../redux/starred/starred.actions";
import { createStructuredSelector } from "reselect";
import { changeStarColor } from "../../redux/starred/starred.selectors";

const MessageTemplate = ({ data, addStarred, changeStarColor }) => {
  const [toggle, setToggle] = useState("false");
  // console.log(match);
  console.log(changeStarColor);

  const handleClick = () => {
    // history.push("/starred");
    // setToggle((prev) => !prev);
    setToggle((prev) => !prev);

    // if (toggle === false) {
    //   removeStarred(data);
    // } else {
    addStarred(data);
    // }
    console.log(toggle);
  };

  return (
    <div className="message-template">
      <span className="square">
        <i className="far fa-square"></i>
      </span>
      <button
        className={!toggle ? "star star-bg" : "star"}
        onClick={handleClick}
      >
        {!toggle ? (
          <img
            src="https://www.gstatic.com/images/icons/material/system/1x/star_googyellow500_20dp.png"
            alt="star"
          />
        ) : (
          <img
            src="https://www.gstatic.com/images/icons/material/system/1x/star_border_black_20dp.png"
            alt="star"
          />
        )}
        {/* <i className="far fa-star"></i> */}
      </button>
      <p className="message-title">{data.name}</p>

      <div className="message-body">
        <div className="message-body-first">
          <span className="message-body-title">Message title</span>
          <span className="message-body-content">
            - na him be this oh, I just dey try practice this wrap thing sef omo
            oti fe ma stress aye me mehn, like wtf is going on....cant I just
            blow with code
          </span>
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
        <p className="date">26 Jan</p>
      </div>
      {/* <div className="date-and-icons"> */}
      {/* <div className="date-icons">
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
        </div> */}
    </div>
    // </div>
  );
};

const mapStateToProps = createStructuredSelector({
  changeStarColor,
});

const mapDispatchToProps = (dispatch) => ({
  addStarred: (star) => dispatch(addStarred(star)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageTemplate);
