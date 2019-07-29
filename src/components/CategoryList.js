import React from "react";
import Category from "./Category.js";
import { initialState } from "../reducers/index.js";

function CategoryList() {
  // array of the categories.
  const categories = initialState.data[0]["categories"];

  return (
    <section className="category">
      <div>
        {categories.map(cate => {
          console.log(cate, "cate");
        })}
      </div>
    </section>
  );
}

export default CategoryList;

/*

  return (
    <section className="category">
      {categories.map(category => (
        <Category
          key={category.id}
          categoryTitle={category.categoryTitle}
          topNine={category.topNine}
        />
      ))}
    </section>
  );

*/
