import React from 'react';
import { Box, Button, Icon, Title, Media } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faClock } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';

import { setTodoStatus } from '../action-creators/todos';
import { Todo, TodoStatus } from '../models/todos';

interface TodoCardProps {
  todo: Todo;
}

interface ActionButtonProps {
  disabled?: boolean;
  onClickHandler: () => void;
}
interface TodoCardActionProps {
  icon: IconProp;
  tooltip?: string;
  disabled?: boolean;
  onClickHandler: () => void;
}

function AwaitButton(props: ActionButtonProps) {
  return (
    <TodoCardAction
      icon={faClock}
      tooltip={'Mark as Awaiting'}
      disabled={props.disabled}
      onClickHandler={props.onClickHandler}
    />
  );
}

function DoneButton(props: ActionButtonProps) {
  return (
    <TodoCardAction
      icon={faCheckSquare}
      tooltip={'Mark as Done'}
      disabled={props.disabled}
      onClickHandler={props.onClickHandler}
    />
  );
}

function TodoCardAction(props: TodoCardActionProps) {
  const size = 'medium';

  return (
    <Button
      size={size}
      outlined={false}
      color="white"
      tooltip={props.disabled ? 'Already set' : props.tooltip}
      disabled={props.disabled}
      onClick={props.onClickHandler}
    >
      <Icon size={size}>
        <FontAwesomeIcon icon={props.icon} size={'lg'} />
      </Icon>
    </Button>
  );
}

function TodoCard(props: TodoCardProps) {
  const dispatch = useDispatch();

  const onDoneButtonClick = () => {
    dispatch(setTodoStatus(props.todo.id, TodoStatus.DONE));
  };

  const onAwaitButtonClick = () => {
    dispatch(setTodoStatus(props.todo.id, TodoStatus.AWAITING));
  };

  return (
    <Box>
      <Media>
        <Media.Item>
          <Title subtitle size={4}>
            {props.todo.content}
          </Title>
          <small>{props.todo.created.toLocaleString()}</small>
        </Media.Item>

        <Media.Item align="right">
          <AwaitButton
            onClickHandler={() => onAwaitButtonClick()}
            disabled={props.todo.status === TodoStatus.AWAITING}
          />
          <DoneButton
            onClickHandler={() => onDoneButtonClick()}
            disabled={props.todo.status === TodoStatus.DONE}
          />
        </Media.Item>
      </Media>
    </Box>
  );
}

export default TodoCard;
