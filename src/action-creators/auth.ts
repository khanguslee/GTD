import { createRoutine } from 'redux-saga-routines';

import { ISetUserAction, UserActions } from './actionTypes';
import { AuthenticationType, User } from '../models/user';

const setUser = (user: User): ISetUserAction => {
  return {
    type: UserActions.SET,
    payload: user,
  };
};

const loginUser = createRoutine(UserActions.LOGIN, {
  trigger: (type: AuthenticationType, credentials: string) => {
    return {
      type,
      credentials,
    };
  },
});

export { setUser, loginUser };
