// Dependencies
import React from "react";
import { Card } from "semantic-ui-react";
import Item from "./Item.js";
import EditForm from "./EditForm.js";
// Objects

// Styles

const Data = props => {
  const boxes = props.topNine;

  console.log("Data props", props);

  return (
    <Card className="category">
      <Card.Header>{props.categoryTitle}</Card.Header>
      <section className="top-nine-box">
        {boxes.map(box => (
          <Item name={box.name} />
        ))}
      </section>
      <EditForm />
    </Card>
  );
};

export default Data;
