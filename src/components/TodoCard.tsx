import React from 'react';
import { Box, Button, Icon, Title, Media } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';

import { setTodoStatus } from '../action-creators/todos';
import { Todo, TodoStatus } from '../models/todos';

interface TodoCardProps {
  todo: Todo;
}

interface DoneButtonProps {
  onClickHandler: () => void;
}

function DoneButton(props: DoneButtonProps) {
  const size = 'medium';

  return (
    <Button
      size={size}
      outlined={false}
      color="white"
      onClick={props.onClickHandler}
    >
      <Icon size={size}>
        <FontAwesomeIcon icon={faCheckSquare} size={'lg'} />
      </Icon>
    </Button>
  );
}

function TodoCard(props: TodoCardProps) {
  const dispatch = useDispatch();

  const onDoneButtonClick = () => {
    dispatch(setTodoStatus(props.todo.id, TodoStatus.DONE));
  };
  return (
    <Box>
      <Media>
        <Media.Item>
          <Title subtitle size={4}>
            {props.todo.content}
          </Title>
        </Media.Item>

        <Media.Item align="right">
          {props.todo.status !== TodoStatus.DONE && (
            <DoneButton onClickHandler={() => onDoneButtonClick()} />
          )}
        </Media.Item>
      </Media>
    </Box>
  );
}

export default TodoCard;
