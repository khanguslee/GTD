import { all, takeEvery } from 'redux-saga/effects';
import * as Realm from 'realm-web';

import { ILoginUserAction } from '../action-creators/actionTypes';
import { loginUser } from '../action-creators/auth';
import { AuthenticationType } from '../models/user';

function* userLoginSaga(action: ILoginUserAction) {
  const app = new Realm.App(process.env.REACT_APP_REALM_APP_ID || '');
  switch (action.payload.type) {
    case AuthenticationType.GOOGLE: {
      const credentials = Realm.Credentials.google(action.payload.credentials);
      const user: Realm.User<
        globalThis.Realm.DefaultFunctionsFactory,
        any,
        globalThis.Realm.DefaultUserProfileData
      > = yield app.logIn(credentials);
      console.log(
        `Logged in with id: ${user.id} and name: ${user.profile.name}`
      );
      break;
    }
    default:
      console.error(`Invalid authentication type - ${action.payload.type}`);
  }
}

function* userWatcher() {
  yield takeEvery(loginUser.TRIGGER, userLoginSaga);
}

export function* userSaga() {
  yield all([userWatcher()]);
}
