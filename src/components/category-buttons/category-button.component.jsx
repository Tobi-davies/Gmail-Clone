import React, { useState } from "react";
import "./category-button.styles.css";
import {
  changePage,
  hidePromo,
  hideSocial,
} from "../../redux/paginate/paginate.actions";
import {
  selectPromo,
  selectSocial,
} from "../../redux/paginate/paginate.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const CategoryBtn = ({
  // paginate,
  changePage,
  hidePromo,
  hideSocial,
  selectPromo,
  selectSocial,
  // socialVisible,
  // setSocialVisible,
  // promoVisible,
  // setPromoVisible,
}) => {
  const [color, setColor] = useState("red");
  // const [green, setGreen] = useState(false);
  // const [blue, setBlue] = useState(false);
  // const [socialVisible, setSocialVisible] = useState(true);
  // const [promoVisible, setPromoVisible] = useState(true);
  const handleChange1 = () => {
    setColor("red");
    // paginate(1);
    changePage(1);
  };

  const handleChange2 = () => {
    setColor("blue");
    // paginate(2);
    changePage(2);
    hideSocial();
    // setSocialVisible(false);
  };

  const handleChange3 = () => {
    setColor("green");
    // paginate(3);
    changePage(3);
    hidePromo();
    // setPromoVisible(false);
  };

  return (
    <div className="category-btn">
      <button
        className={color === "red" ? "button button1" : "button button1 blank"}
        onClick={handleChange1}
      >
        <div className="btn-img">
          {color === "red" ? (
            <img
              src="https://www.gstatic.com/images/icons/material/system/1x/inbox_gm_googlered600_20dp.png"
              alt="img"
            />
          ) : (
            <img
              src="https://www.gstatic.com/images/icons/material/system/1x/inbox_black_20dp.png"
              alt="img"
              className="dull"
            />
          )}
        </div>
        <p>Primary</p>
        <div className="border-red"></div>
      </button>
      <button
        className={color === "blue" ? "button button2 blue" : "button button2"}
        onClick={handleChange2}
      >
        <div className="btn-img">
          {color === "blue" ? (
            <img
              src="https://www.gstatic.com/images/icons/material/system/1x/people_gm_blue600_20dp.png"
              alt="img"
            />
          ) : (
            <img
              src="https://www.gstatic.com/images/icons/material/system/1x/people_black_20dp.png"
              alt="img"
              className="dull"
            />
          )}
        </div>

        <div className="btn-info">
          <div className="top">
            <p className="title">Social</p>
            <p
              className={
                selectSocial ? "new new-social" : "new new-social disappear"
              }
            >
              2 new
            </p>
          </div>
          <div className={selectSocial ? "bottom" : "new bottom disappear"}>
            Twitter, LinkedIn
          </div>
        </div>
        <div className="border-blue"></div>
      </button>
      <button
        className={
          color === "green" ? "button button3 green" : "button3 button"
        }
        onClick={handleChange3}
      >
        <div className="btn-img">
          {color === "green" ? (
            <img
              src="https://www.gstatic.com/images/icons/material/system/1x/local_offer_gm_green700_20dp.png"
              alt="img"
            />
          ) : (
            <img
              src="https://www.gstatic.com/images/icons/material/system/1x/local_offer_black_20dp.png"
              alt="img"
              className="dull"
            />
          )}
        </div>
        <div className="btn-info">
          <div className="top">
            <p className={selectPromo ? "title promotion-title" : "title"}>
              Promotions
            </p>
            <p
              className={selectPromo ? "new new-promo" : "new new-promo clear"}
            >
              1 new
            </p>
          </div>
          <div className={selectPromo ? "bottom" : "new bottom clear"}>
            Udemy
          </div>
        </div>
        <div className="border-green"></div>
      </button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  selectSocial,
  selectPromo,
});
const mapDispatchToProps = (dispatch) => ({
  changePage: (value) => dispatch(changePage(value)),
  hideSocial: () => dispatch(hideSocial()),
  hidePromo: () => dispatch(hidePromo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBtn);

// const Pagination = ({ pageLimit, newLength, paginate, currentPage }) => {
//   const pageNumbers = [];
//   const averagePost = Math.ceil(newLength / pageLimit);
//   for (let i = 1; i < averagePost + 1; i++) {
//     pageNumbers.push(i);
//   }

//   console.log(averagePost);

//   return (
//     <nav className="paginated">
//       {currentPage > 1 ? (
//         <li className="prev" onClick={() => paginate(currentPage - 1)}>
//           PREV
//         </li>
//       ) : (
//         ""
//       )}
//       {pageNumbers.map((num) => (
//         <li key={num} className="page-link" onClick={() => paginate(num)}>
//           {num}
//         </li>
//       ))}

//       {currentPage < averagePost ? (
//         <li className="prev" onClick={() => paginate(currentPage + 1)}>
//           NEXT
//         </li>
//       ) : (
//         ""
//       )}
//     </nav>
//   );
// };
