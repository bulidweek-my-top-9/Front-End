// Dependencies
import React from "react";
import { Card } from "semantic-ui-react";
import Item from "./Item.js";
import EditForm from "./EditForm.js";
import { Link } from "react-router-dom"
// Objects

// Styles

const Data = props => {
  const boxes = props.topNine;
  console.log("props", props);
  console.log("Data props", props);

  return (
    <Card className="category">

    <Link to={{
      pathname: `/home/categories/${props.categoryTitle}`,
      state:{
      categoryTitle: props.categoryTitle,
      topNine: props.topNine,
      }
    }}><Card.Header>{props.categoryTitle}</Card.Header></Link>
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
