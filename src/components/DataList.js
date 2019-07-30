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

  return (
    <div>
      {props.data.length > 0 ? (
        props.data.map(data => {
          return <Data data={data} key={data.id} />;
        })
      ) : (
        <div> Data incoming! </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  //console.log("DataList mapStateToProps state", state);
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
