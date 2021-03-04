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

export enum TodoActions {
  ADD = 'TODO/ADD',
  UPDATE_STATUS = 'TODO/UPDATE_STATUS',
}

export type ITodoAction = ITodoAddAction | ITodoSetStatusAction;

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
