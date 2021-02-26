import { Todo, TodoState, TodoStatus } from '../models/todos';
import { RootState } from '../store';

const getTodosState = (store: RootState): TodoState => store.todos;

const getTodoList = (store: RootState) =>
  getTodosState(store) ? getTodosState(store).allIds : [];

const getTodoById = (store: RootState, id: string): Todo | undefined =>
  getTodosState(store) ? getTodosState(store).byIds[id] : undefined;

const getAllTodos = (store: RootState) =>
  getTodoList(store).map((id) => getTodoById(store, id));

const getTodosByStatus = (store: RootState, statusType: TodoStatus) => {
  const allTodos = getAllTodos(store);
  return allTodos.filter((todo) => todo?.status === statusType);
};

export {
  getTodosState,
  getTodoList,
  getTodoById,
  getAllTodos,
  getTodosByStatus,
};
