import { createRoutine } from 'redux-saga-routines';

import { TodoActions, ITodoAction } from './actionTypes';
import { Todo, TodoStatus } from '../models/todos';
import { generateUuid } from '../utils/uuid';

const addTodo = (content: string): ITodoAction => {
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

const deleteTodo = createRoutine(TodoActions.DELETE);

const fetchTodo = createRoutine(TodoActions.FETCH, {
  success: (todos: Todo[]) => todos,
});

const setTodoStatus = (id: string, status: TodoStatus): ITodoAction => {
  const payload = {
    id,
    status,
  };
  return {
    type: TodoActions.UPDATE_STATUS,
    payload,
  };
};

export { addTodo, deleteTodo, fetchTodo, setTodoStatus };
