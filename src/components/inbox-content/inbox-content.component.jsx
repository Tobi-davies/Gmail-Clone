import React, { useState, useEffect } from "react";
import "./inbox-content.styles.css";
// import DATA from "../../data";
import CategoryBtn from "../category-buttons/category-button.component";
import MessageTemplate from "../message-template/message-template.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectPageData } from "../../redux/paginate/paginate.selectors";
import { changePage } from "../../redux/paginate/paginate.actions";

const InboxContent = ({
  changePage,
  currentMessages,
  // promoVisible,
  // setPromoVisible,
  // socialVisible,
  // setSocialVisible,
}) => {
  useEffect(() => {
    changePage(1);
  }, [changePage]);
  console.log(currentMessages);

  // const [data] = useState(DATA);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [pageLimit] = useState(15);

  // const [socialVisible, setSocialVisible] = useState(true);
  // const [promoVisible, setPromoVisible] = useState(true);

  // const indexOfLastPost = currentPage * pageLimit;
  // const indexOfFirstPost = indexOfLastPost - pageLimit;

  // let currentMessages = null;

  // currentMessages = data.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(currentMessages);
  // console.log(data);
  // console.log(currentPage);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="inbox-content">
      <CategoryBtn
      // paginate={paginate}
      // socialVisible={socialVisible}
      // setSocialVisible={setSocialVisible}
      // promoVisible={promoVisible}
      // setPromoVisible={setPromoVisible}
      />
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
