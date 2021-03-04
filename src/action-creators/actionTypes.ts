import { Todo } from '../models/todos';

import { loginUser } from './auth';

/* Todo */
export interface ITodoAddAction {
  type: TodoActions.ADD;
  payload: Todo;
}

export interface ITodoSetStatusAction {
  type: TodoActions.UPDATE_STATUS;
  payload: Pick<Todo, 'id' | 'status'>;
}

/* 
  TODO: redux-saga-routines do not play nicely with our own action types defined in an enum,
  so we have to redfine the interface for the reducer to infer types correctly.
 */
// export type ITodoSetAction = ReturnType<typeof fetchTodo.success>;
export interface ITodoSetAction {
  type: TodoActions.FETCH_SUCCESS;
  payload: { todos: Todo[] };
}
// export type ITodoFetchAction = ReturnType<typeof fetchTodo.trigger>;
export interface ITodoFetchAction {
  type: TodoActions.FETCH_TRIGGER;
}

export enum TodoActions {
  ADD = 'TODO/ADD',
  FETCH = 'TODO/FETCH',
  FETCH_TRIGGER = 'TODO/FETCH/TRIGGER',
  FETCH_SUCCESS = 'TODO/FETCH/SUCCESS',
  UPDATE_STATUS = 'TODO/UPDATE_STATUS',
}

export type ITodoAction =
  | ITodoAddAction
  | ITodoSetStatusAction
  | ITodoSetAction
  | ITodoFetchAction;

/* User */

// TODO: Create a generic type for all redux saga routine types
export type ILoginUserActionTrigger = ReturnType<typeof loginUser.trigger>;
export type ILoginUserActionSuccess = ReturnType<typeof loginUser.success>;
export type ILoginUserAction =
  | ILoginUserActionTrigger
  | ILoginUserActionSuccess;

export enum UserActions {
  LOGIN = 'USER/LOGIN',
}

export type IUserAction = ILoginUserAction;
