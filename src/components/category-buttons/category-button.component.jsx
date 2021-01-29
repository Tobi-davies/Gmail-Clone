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
  };

  const handleChange2 = () => {
    setRed(false);
    setGreen(false);
    setBlue(true);
  };

  const handleChange3 = () => {
    setRed(false);
    setGreen(true);
    setBlue(false);
  };

  return (
    <div className="category-btn">
      <button
        className={red ? "button1" : "button1 blank"}
        onClick={handleChange1}
        onClick={() => paginate(1)}
      >
        TEST1
      </button>
      <button
        className={blue ? "button2 blue" : "button2 "}
        onClick={handleChange2}
      >
        TEST2
      </button>
      <button
        className={green ? "button3 green" : "button3 "}
        onClick={handleChange3}
        onClick={() => paginate(3)}
      >
        TEST3
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
