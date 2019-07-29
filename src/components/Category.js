import React from "react";
import Item from "./Item.js";

function Category(props) {
  //const boxes = props.topNine;
  console.log("props", props);

  return (
    <div className="category-container">
      <p>this is a catergory</p>
      <section className="top-nine-box">
        {/* {boxes.map(box => (
          <Item box={box} />
        ))} */}
      </section>
    </div>
  );
}

export default Category;
