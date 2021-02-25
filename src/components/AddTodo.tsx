import React from 'react';
import { Button, Control, Field, Input, Section } from 'rbx';

function AddTodo() {
  return (
    <Section>
      <Field kind="addons">
        <Control expanded>
          <Input placeholder="Add Todo" size="medium" />
        </Control>

        <Control>
          <Button color="primary" size="medium">
            Add
          </Button>
        </Control>
      </Field>
    </Section>
  );
}

export default AddTodo;
