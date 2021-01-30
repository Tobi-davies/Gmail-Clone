import React from "react";
import "./star-list.styles.css";

const StarList = ({ starred }) => {
  return (
    <div className="star-list">
      <span className="square">
        <i className="far fa-square"></i>
      </span>
      <button className="star">
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
      <p className="message-body">
        na him be this oh, I just dey try practice this wrap thing sef... omo
        oti fe ma stress aye me mehn, like wtf is going on....cant I just blow
        with code
      </p>
      <p className="date">26 Jan</p>
    </div>
  );
};

export default StarList;
