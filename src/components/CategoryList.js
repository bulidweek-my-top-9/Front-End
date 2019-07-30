import React from "react";
import Category from "./Category.js";
import { initialState } from "../reducers/index.js";

function CategoryList() {
  // array of the categories.
  const categories = initialState.data[0]["categories"];

  return (
    <section className="category-list">
      <div id="card-container">
        {categories.map(cate => (
          <Category
            key={cate.id}
            categoryTitle={cate.categoryTitle}
            topNine={cate.topNine}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoryList;
