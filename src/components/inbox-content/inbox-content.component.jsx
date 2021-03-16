import React, { useEffect } from "react";
import "./inbox-content.styles.css";
import CategoryBtn from "../category-buttons/category-button.component";
import MessageTemplate from "../message-template/message-template.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectPageData } from "../../redux/paginate/paginate.selectors";
import { changePage } from "../../redux/paginate/paginate.actions";

const InboxContent = ({ changePage, currentMessages }) => {
  useEffect(() => {
    changePage(1);
  }, [changePage]);
  // console.log(currentMessages);

  return (
    <div className="inbox-content">
      <CategoryBtn />
      {currentMessages.map((data, index) => (
        <MessageTemplate key={index} data={data} />
      ))}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  changePage: (value) => dispatch(changePage(value)),
});

const mapStateToProps = createStructuredSelector({
  currentMessages: selectPageData,
});

export default connect(mapStateToProps, mapDispatchToProps)(InboxContent);
