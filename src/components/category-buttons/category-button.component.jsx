import React, { useState } from "react";
import "./category-button.styles.css";

const CategoryBtn = ({ paginate }) => {
  const [red, setRed] = useState(true);
  const [green, setGreen] = useState(false);
  const [blue, setBlue] = useState(false);
  const handleChange1 = () => {
    setRed(true);
    setGreen(false);
    setBlue(false);
    paginate(1);
  };

  const handleChange2 = () => {
    setRed(false);
    setGreen(false);
    setBlue(true);
    paginate(2);
  };

  const handleChange3 = () => {
    setRed(false);
    setGreen(true);
    setBlue(false);
    paginate(3);
  };

  return (
    <div className="category-btn">
      <button
        className={red ? "button button1" : "button button1 blank"}
        onClick={handleChange1}
      >
        <div className="btn-img">
          {red ? (
            <img src="https://www.gstatic.com/images/icons/material/system/1x/inbox_gm_googlered600_20dp.png" />
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
        className={blue ? "button button2 blue" : "button button2"}
        onClick={handleChange2}
      >
        <div className="btn-img">
          {blue ? (
            <img src="https://www.gstatic.com/images/icons/material/system/1x/people_gm_blue600_20dp.png" />
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
            <p className="new new-social">2 new</p>
          </div>
          <div className="bottom">Twitter, Facebook</div>
        </div>
        <div className="border-blue"></div>
      </button>
      <button
        className={green ? "button button3 green" : "button3 button"}
        onClick={handleChange3}
      >
        <div className="btn-img">
          {green ? (
            <img src="https://www.gstatic.com/images/icons/material/system/1x/local_offer_gm_green700_20dp.png" />
          ) : (
            <img
              src="https://www.gstatic.com/images/icons/material/system/1x/local_offer_black_20dp.png"
              alt="img"
              className="dull"
            />
          )}
        </div>
        <p className="title">Promotions</p>
        <div className="border-green"></div>
      </button>
    </div>
  );
};

export default CategoryBtn;

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
