import React, { useState } from "react";
import "./message-template.styles.css";
// import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addStarred, removeStarred } from "../../redux/starred/starred.actions";

const MessageTemplate = ({ data, addStarred }) => {
  const [toggle, setToggle] = useState("false");
  // console.log(match);

  const handleClick = () => {
    // history.push("/starred");
    // setToggle((prev) => !prev);
    setToggle(!toggle);

    if (toggle === false) {
      removeStarred(data);
    } else {
      addStarred(data);
    }
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
      <p className="message-body">
        na him be this oh, I just dey try practice this wrap thing sef... omo
        oti fe ma stress aye me mehn, like wtf is going on....cant I just blow
        with code
      </p>
      <p className="date">26 Jan</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addStarred: (star) => dispatch(addStarred(star)),
  removeStarred: (unstar) => dispatch(removeStarred(unstar)),
});

export default connect(null, mapDispatchToProps)(MessageTemplate);
