import React, { useState } from "react";
import "./sent.styles.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectOutboxList } from "../../redux/outbox/outbox.selectors";

const Sent = () => {
  return <div className="sent">No Messages Sent Yet</div>;
};

const mapStateToProps = createStructuredSelector({
  sentItems: selectOutboxList,
});

export default connect(mapStateToProps)(Sent);
