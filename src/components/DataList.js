// Dependencies
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// Objects
import Data from "./Data";
//import Loader from "react-loader-spinner";
import { fetchApi } from "../actions";

// Styles

const DataList = props => {
  // useEffect(() => {
  //   props.fetchApi();
  // }, []);

  // if (props.isFetching) {
  //   return <Loader type="Puff" color="#00BFFF" height="100" width="100" />;
  // }

  console.log("DataList props", props);
  return (
    <section className="category-list">
      <div id="card-container">
        {/* {categories.map(cate => (
          <Data
            key={cate.id}
            categoryTitle={cate.categoryTitle}
            topNine={cate.topNine}
          />
        ))} */}
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error,
    isFetching: state.isFetching,
    data: state.data
  };
};
export default connect(
  mapStateToProps,
  { fetchApi }
)(DataList);
