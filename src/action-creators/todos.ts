import {
  TodoActions,
  ITodoAddAction,
  ITodoSetStatusAction,
} from './actionTypes';
import { Todo, TodoStatus } from '../models/todos';
import { generateUuid } from '../utils/uuid';

const addTodo = (content: string): ITodoAddAction => {
  const payload: Todo = {
    id: generateUuid(),
    created: new Date(),
    status: TodoStatus.TODO,
    content,
  };

  return {
    type: TodoActions.ADD,
    payload,
  };
};

const setTodoStatus = (
  id: string,
  status: TodoStatus
): ITodoSetStatusAction => {
  const payload = {
    id,
    status,
  };
  return {
    type: TodoActions.UPDATE_STATUS,
    payload,
  };
};

export { addTodo, setTodoStatus };
