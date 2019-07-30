import React, { useState } from "react";
import { Card, Form, Button } from "semantic-ui-react";

function EditForm() {

  function handleSubmit(event) {
    const newName = {
      name: name
    };

    event.preventDefault();
  }

  return (
    <Card className="new-name-form">
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>My Favorite Thing</label>
          <input
            onChange={event => setName(event.target.value)}
            type="text"
            id="name"
            placeholder="Name"
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Card>
  );
}

export default EditForm;
