import { Todo } from '../models/todos';
import { User } from '../models/user';

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
export interface ISetUserAction {
  type: UserActions.SET;
  payload: User;
}

export type ILoginUserAction = ReturnType<typeof loginUser>;

export enum UserActions {
  LOGIN = 'USER/LOGIN',
  SET = 'USER/SET',
}

export type IUserAction = ISetUserAction | ILoginUserAction;
