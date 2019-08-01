import React, { useState } from "react";
import { addTopNine } from "../actions/index";
import { connect } from "react-redux";

const MovieForm = props => {
  const [newMovie, setNewMovie] = useState({
    name: "",
    age: "",
    height: ""
  });
  console.log("MovieForm newMovie", newMovie);
  const handleChanges = event => {
    event.preventDefault();
    console.log("handleChanges newMovie", newMovie);
    setNewMovie({ ...newMovie, [event.target.name]: event.target.value });
  };

  const addTopNine = event => {
    event.preventDefault();
    props.addMovie(newMovie);
    setNewMovie({
      name: "",
      age: "",
      height: ""
    });
  };

  return (
    <form onSubmit={addTopNine} className="movie-form">
      <input
        type="text"
        placeholder="movie name"
        name="name"
        value={newMovie.name}
        onChange={handleChanges}
      />

      <button className="btn">Add Movie</button>
    </form>
  );
};

export default connect(
  null,
  { addTopNine }
)(MovieForm);
