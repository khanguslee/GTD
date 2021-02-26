import { Todo } from '../models/todos';

export interface BaseAction<T, U> {
  type: T;
  payload: U;
}

export type TodoAddAction = BaseAction<TodoActions.ADD, Todo>;

export type TodoSetStatusAction = BaseAction<
  TodoActions.UPDATE_STATUS,
  Pick<Todo, 'id' | 'status'>
>;

export enum TodoActions {
  ADD = 'ADD',
  UPDATE_STATUS = 'UPDATE_STATUS',
}

export type TodoAction = TodoAddAction | TodoSetStatusAction;
