import React, { useState } from 'react';
import { Button, Control, Field, Input, Section } from 'rbx';
import { useDispatch } from 'react-redux';

import { addTodo } from '../action-creators/todos';

function AddTodo() {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState<string>('');

  const addTodoHandler = () => {
    // Validate todo text
    if (todoText === '') {
      return;
    }
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  return (
    <Section>
      <form onSubmit={(event) => event.preventDefault()}>
        <Field kind="addons">
          <Control expanded>
            <Input
              placeholder="Add Todo"
              size="medium"
              value={todoText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTodoText(e.target.value)
              }
            />
          </Control>

          <Control>
            <Button
              color="primary"
              size="medium"
              onClick={() => addTodoHandler()}
            >
              Add
            </Button>
          </Control>
        </Field>
      </form>
    </Section>
  );
}

export default AddTodo;
