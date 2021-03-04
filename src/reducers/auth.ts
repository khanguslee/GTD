import { AuthState } from '../models/user';
import { IUserAction } from '../action-creators/actionTypes';
import { loginUser } from '../action-creators/auth';

const initialAuthState: AuthState = {
  user: undefined,
  apiKey: '',
};

const reducer = (state: AuthState = initialAuthState, action: IUserAction) => {
  switch (action.type) {
    case loginUser.SUCCESS: {
      const user = action.payload as Realm.User;
      return {
        ...state,
        user,
      };
    }
  }
  return state;
};

export default reducer;
