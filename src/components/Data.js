// Dependencies
import React from "react";
import { Card } from "semantic-ui-react";
import Item from "./Item.js";
import EditForm from "./EditForm.js";

import styled from "styled-components";

import { Link } from "react-router-dom"

// Objects

// Styles
const CatHeader = styled.h3`
color: #053868;
font-size: 2rem;

`

const Data = props => {
  const boxes = props.topNine;
  console.log("props", props);
  console.log("Data props", props);

  return (
    <Card className="category">

<<<<<<< HEAD
    <Link to={{
      pathname: `/home/categories/${props.categoryTitle}`,
      state:{
      categoryTitle: props.categoryTitle,
      topNine: props.topNine,
      }
    }}><Card.Header>{props.categoryTitle}</Card.Header></Link>
=======
      <CatHeader>{props.categoryTitle}</CatHeader>


    <Link to={`/categories/${props.categoryTitle}`}><Card.Header>{props.categoryTitle}</Card.Header></Link>

>>>>>>> master
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
