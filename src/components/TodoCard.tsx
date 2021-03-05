import React from 'react';
import { Box, Button, Icon, Title, Media } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faSquare,
  faCheckSquare,
  faClock,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';

import { setTodoStatus, deleteTodo } from '../action-creators/todos';
import { Todo, TodoStatus } from '../models/todos';

interface TodoCardProps {
  todo: Todo;
}

interface ActionButtonProps {
  disabled?: boolean;
  onClickHandler: () => void;
}

interface DoneButtonProps extends ActionButtonProps {
  isDone: boolean;
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

function DoneButton(props: DoneButtonProps) {
  const icon = props.isDone ? faCheckSquare : faSquare;
  const tooltipStatus = props.isDone ? 'Todo' : 'Done';
  return (
    <TodoCardAction
      icon={icon}
      tooltip={`Mark as ${tooltipStatus}`}
      disabled={props.disabled}
      onClickHandler={props.onClickHandler}
    />
  );
}

function DeleteButton(props: ActionButtonProps) {
  return (
    <TodoCardAction
      icon={faTrashAlt}
      tooltip={'Mark Delete'}
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
    const todoStatus =
      props.todo.status === TodoStatus.DONE ? TodoStatus.TODO : TodoStatus.DONE;
    dispatch(setTodoStatus(props.todo.id, todoStatus));
  };

  const onAwaitButtonClick = () => {
    dispatch(setTodoStatus(props.todo.id, TodoStatus.AWAITING));
  };

  const onDeleteButtonClick = () => {
    dispatch(deleteTodo.trigger(props.todo));
  };

  return (
    <Box>
      <Media>
        <Media.Item align="left">
          <DoneButton
            isDone={props.todo.status === TodoStatus.DONE}
            onClickHandler={() => onDoneButtonClick()}
          />
        </Media.Item>
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

          <DeleteButton onClickHandler={() => onDeleteButtonClick()} />
        </Media.Item>
      </Media>
    </Box>
  );
}

export default TodoCard;
