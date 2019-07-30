import React from "react";
import { Flag } from "semantic-ui-react";
function Item(props) {
  return (
    <div className="item">
      <p>{props.name}</p>
    </div>
  );
}

export default Item;
