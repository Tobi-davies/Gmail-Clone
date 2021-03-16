import React from "react";
import "./starred.styles.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectStarredList } from "../../redux/starred/starred.selectors";
import StarList from "../star-list/star-list.component";

const Starred = ({ starredItems }) => {
  // console.log(starredItems);

  return (
    <div className="starred">
      {starredItems.map((starred, index) => (
        <StarList key={index} starred={starred} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  starredItems: selectStarredList,
});
export default connect(mapStateToProps)(Starred);
