import { TodoActions, TodoAddAction, TodoSetStatusAction } from './actionTypes';
import { Todo, TodoStatus } from '../models/todos';
import { generateUuid } from '../utils/uuid';

const addTodo = (content: string): TodoAddAction => {
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

const setTodoStatus = (id: string, status: TodoStatus): TodoSetStatusAction => {
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
