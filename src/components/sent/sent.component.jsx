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
      {sentItems.length > 0 ? (
        <div>
          <h4 className="sent-heading">SENT</h4>
          {sentItems.map((item, index) => (
            <SentMessages key={index} item={item} />
          ))}
        </div>
      ) : (
        <p className="no-item">Nothing in Sent</p>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sentItems: selectOutboxList,
});

export default connect(mapStateToProps)(Sent);
