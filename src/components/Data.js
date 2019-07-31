// Dependencies
import React from "react";
import { Card } from "semantic-ui-react";
import Item from "./Item.js";
import EditForm from "./EditForm.js";

import styled from "styled-components";

import { Link } from "react-router-dom";

// Objects

// Styles
const CatHeader = styled.h3`
  color: #053868;
  font-size: 2rem;
`;

const Data = props => {
  const boxes = props.data;

  return (
    <Card className="category">
      <CatHeader>Favorite Music</CatHeader>

      <Link to={`/categories/${props.categoryTitle}`}>
        <Card.Header>Favorite Music</Card.Header>
      </Link>

      <section className="top-nine-box">
        {boxes.map(box => (
          <Item name={box.artist_name} />
        ))}
      </section>
      <EditForm />
    </Card>
  );
};

export default Data;
