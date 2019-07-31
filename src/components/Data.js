// Dependencies
import React from "react";
import { Card } from "semantic-ui-react";
import Item from "./Item.js";
import EditForm from "./EditForm.js";
import styled from "styled-components";
// Objects

// Styles
const CatHeader = styled.h3`
color: #053868;
font-size: 2rem;

`

const Data = props => {
  const boxes = props.topNine;

  console.log("Data props", props);

  return (
    <Card className="category">
      <CatHeader>{props.categoryTitle}</CatHeader>
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
