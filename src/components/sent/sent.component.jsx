import React, { useState } from "react";
import "./sent.styles.css";

const Sent = () => {
  const [color, setColor] = useState(true);
  const handleChange1 = () => {
    setColor(true);
  };

  const handleChange2 = () => {
    setColor(false);
  };

  const handleChange3 = () => {
    setColor(false);
  };

  return (
    <div className="sent">
      No Messages Sent Yet
      <button
        className={color ? "button1" : "button1 blank"}
        onClick={handleChange1}
      >
        TEST1
      </button>
      <button className="button2" onClick={handleChange2}>
        TEST2
      </button>
      <button className="button3" onClick={handleChange3}>
        TEST3
      </button>
    </div>
  );
};

export default Sent;
