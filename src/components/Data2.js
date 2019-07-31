// Dependencies
import React from "react";
import { Card } from "semantic-ui-react";
import Item from "./Item.js";
import EditForm from "./EditForm.js";
// Objects

// Styles

const Data2 = props => {
  const boxes = props.location.state.topNine;
  console.log("props data2", props);
  

  return (
    <Card className="category">

    <Card.Header>{props.location.state.categoryTitle}</Card.Header>
      <section className="top-nine-box">
        {boxes.map(box => (
          <Item name={box.name} />
        ))}
      </section>
      <EditForm />
    </Card>
  );
};

export default Data2;
