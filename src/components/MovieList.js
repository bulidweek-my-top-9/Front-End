// Dependencies
import React, { useEffect } from "react";
import { connect } from "react-redux";

// Objects
import Movie from "./Movie";
import MovieForm from "./MovieForm";
import Loader from "react-loader-spinner";
import { fetchApi } from "../actions";

// Styles

const MovieList = props => {
  useEffect(() => {
    props.fetchApi();
  }, []);

  console.log("MovieList props", props);
  return (
    <div>
      {props.movies ? (
        props.movies.map(movie => {
          return <Movie movie={movie} />;
        })
      ) : (
        <div>Movies incoming!</div>
      )}
      <MovieForm />
    </div>
  );
};

const mapStateToProps = state => {
  console.log("MovieList state", state);
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
)(MovieList);
