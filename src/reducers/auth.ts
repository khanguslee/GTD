import { AuthState, User } from '../models/user';
import { IUserAction } from '../action-creators/actionTypes';
import { loginUser } from '../action-creators/auth';

const initialAuthState: AuthState = {
  user: {
    id: '',
    name: '',
  },
};

const reducer = (state: AuthState = initialAuthState, action: IUserAction) => {
  switch (action.type) {
    case loginUser.SUCCESS: {
      const { id, name } = action.payload as User;
      return {
        ...state,
        user: {
          id,
          name,
        },
      };
    }
  }
  return state;
};

export default reducer;
