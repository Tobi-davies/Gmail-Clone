import React from "react";
import "./sent.styles.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectOutboxList } from "../../redux/outbox/outbox.selectors";
import SentMessages from "../sent-messages/sent-messages.component";

const Sent = ({ sentItems }) => {
  // console.log(sentItems);

  return (
    <div className="sent">
      {sentItems.map((item, index) => (
        <SentMessages key={index} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sentItems: selectOutboxList,
});

export default connect(mapStateToProps)(Sent);
