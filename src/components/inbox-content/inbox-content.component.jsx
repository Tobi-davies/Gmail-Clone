import React, { useState } from "react";
import "./inbox-content.styles.css";
import DATA from "../../data";
import CategoryBtn from "../category-buttons/category-button.component";
import MessageTemplate from "../message-template/message-template.component";

const InboxContent = ({
  promoVisible,
  setPromoVisible,
  socialVisible,
  setSocialVisible,
}) => {
  const [data] = useState(DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit] = useState(15);

  // const [socialVisible, setSocialVisible] = useState(true);
  // const [promoVisible, setPromoVisible] = useState(true);

  const indexOfLastPost = currentPage * pageLimit;
  const indexOfFirstPost = indexOfLastPost - pageLimit;

  let currentMessages = null;

  currentMessages = data.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentMessages);
  console.log(data);
  console.log(currentPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="inbox-content">
      <CategoryBtn
        paginate={paginate}
        socialVisible={socialVisible}
        setSocialVisible={setSocialVisible}
        promoVisible={promoVisible}
        setPromoVisible={setPromoVisible}
      />
      {currentMessages.map((data, index) => (
        <MessageTemplate key={index} data={data} />
      ))}
    </div>
  );
};

export default React.memo(InboxContent);
