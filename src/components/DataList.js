// Dependencies
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
// Objects
import Data from "./Data";

// import Loader from "react-loader-spinner";

import { fetchApi } from "../actions";

// Styles

const DataList = props => {
  const [data, setData] = useState({});
  useEffect(() => {
    props.fetchApi();
  }, []);

  // if (props.isFetching) {
  //   return <Loader type="Puff" color="#00BFFF" height="100" width="100" />;
  // }

  console.log("props", props);
  //const categories = props.data[0].categories;
  const favoriteMusic = props.data.top_music;
  console.log(favoriteMusic, "favoriteMusic");
  return (
    <section className="category-list">
      <div id="card-container">
        <Data key={"music"} data={favoriteMusic} />
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
