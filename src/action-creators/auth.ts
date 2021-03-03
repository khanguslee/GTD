import { createRoutine } from 'redux-saga-routines';

import { UserActions } from './actionTypes';
import { AuthenticationType, User } from '../models/user';

const loginUser = createRoutine(UserActions.LOGIN, {
  trigger: (type: AuthenticationType, credentials: string) => {
    return {
      type,
      credentials,
    };
  },
  success: (user: User) => user,
});

export { loginUser };
