import React from "react";
import "./star-list.styles.css";
import { connect } from "react-redux";
import { removeStarred } from "../../redux/starred/starred.actions";

const StarList = ({ starred, removeStarred }) => {
  const handleRemoval = () => {
    removeStarred(starred);
  };

  return (
    <div className="star-list message-template">
      <span className="square">
        <i className="far fa-square"></i>
      </span>
      <button className="star" onClick={handleRemoval}>
        {/* {!toggle ? (
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/star_border_black_20dp.png"
                alt="star"
              />
            ) : (
              <img
                src="https://www.gstatic.com/images/icons/material/system/1x/star_googyellow500_20dp.png"
                alt="star"
              />
            )} */}
        <img
          src="https://www.gstatic.com/images/icons/material/system/1x/star_googyellow500_20dp.png"
          alt="star"
        />
      </button>
      <p className="message-title">{starred.name}</p>
      <div className="message-body">
        <div className="message-body-first">
          <span className="message-body-title">Message title</span>
          <span className="dash">-</span>
          <span className="message-body-content">
            na him be this oh, I just dey try practice this wrap thing sef omo
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
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeStarred: (unstar) => dispatch(removeStarred(unstar)),
});

export default connect(null, mapDispatchToProps)(StarList);
