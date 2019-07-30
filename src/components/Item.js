import React, { useState } from "react";

import { Icon } from "semantic-ui-react";

function Item(props) {
  //const [isEditing, setIsEditing] = useState(false);

  console.log("Item props", props);

  return (
    <div className="item">
      <Icon name="edit" />
      <div>
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default Item;
