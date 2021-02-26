import React from 'react';
import { Box, Title, Media } from 'rbx';
import { Todo } from '../models/todos';

interface TodoCardProps {
  todo: Todo;
}

function TodoCard(props: TodoCardProps) {
  return (
    <Box>
      <Media>
        <Media.Item>
          <Title subtitle size={4}>
            {props.todo.content}
          </Title>
        </Media.Item>
      </Media>
    </Box>
  );
}

export default TodoCard;
