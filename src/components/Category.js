import React from "react";
import Item from "./Item.js";
import { Card } from "semantic-ui-react";
function Category(props) {
  const boxes = props.topNine;

  return (
    <Card className="category">
      <Card.Header>{props.categoryTitle}</Card.Header>
      <section className="top-nine-box">
        {boxes.map(box => (
          <Item name={box.name} />
        ))}
      </section>
    </Card>
  );
}

export default Category;
