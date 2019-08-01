import React, { useState, useEffect } from "react";
import axios from "axios";
import Data from "./Data.js";

export function CategoryList() {
  const [musicians, setMusicians] = useState([]);
  useEffect(() => {
    axios
      .get("https://top-9-backend.herokuapp.com/api/music")
      .then(response => {
        setMusicians(response.data);
        console.log(response, "musicians");
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  //console.log(musicians, "musicians");
  const favoriteMusic = musicians;
  //console.log(favoriteMusic, "favoriteMusic");
  return (
    <section className="category-list">
      <ul id="musician-container">
        {favoriteMusic.map(musician => (
          <Musician name={musician.artist_name} />
        ))}
      </ul>
    </section>
  );
}

export function Musician(props) {
  return <li>{props.name}</li>;
}
