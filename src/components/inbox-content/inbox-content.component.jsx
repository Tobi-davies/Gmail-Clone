import React, { useState } from "react";
import "./inbox-content.styles.css";
import DATA from "../../data";

const InboxContent = () => {
  const [data] = useState(DATA);

  return <div className="inbox-content">{data.map((data) => data.name)}</div>;
};

export default InboxContent;
