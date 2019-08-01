// Dependencies
import React, { useEffect } from "react";
import { connect } from "react-redux";

// Objects
import Data from "./Data";
import Loader from "react-loader-spinner";
import { fetchApi } from "../actions";

// Styles

const DataList = props => {
  useEffect(() => {
    props.fetchApi();
  }, []);

  if (props.isFetching) {
    return <Loader type="Puff" color="#00BFFF" height="100" width="100" />;
  }

  console.log("DataList props", props);
  return (
    <div>
      {/* {props.data.map(data => {
        return <Data data={data} />;
      })} */}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("DataList state", state);
  return {
    error: state.error,
    isFetching: state.isFetching,
    data: state.data,
    movies: state.data.top_movies,
    music: state.data.top_music
  };
};
export default connect(
  mapStateToProps,
  { fetchApi }
)(DataList);
