import { all, put, takeEvery } from 'redux-saga/effects';
import * as Realm from 'realm-web';

import { ILoginUserAction } from '../action-creators/actionTypes';
import { loginUser } from '../action-creators/auth';
import { AuthenticationType } from '../models/user';

function* userLoginSaga(action: ILoginUserAction) {
  try {
    const app = new Realm.App(process.env.REACT_APP_REALM_APP_ID || '');
    switch (action.payload.type) {
      case AuthenticationType.GOOGLE: {
        // Request credentials from Realm
        yield put(loginUser.request());
        const credentials = Realm.Credentials.google(
          action.payload.credentials
        );
        const user: Realm.User<
          globalThis.Realm.DefaultFunctionsFactory,
          any,
          globalThis.Realm.DefaultUserProfileData
        > = yield app.logIn(credentials);

        // Login to realm app using google credentials
        console.log(
          `Logged in with id: ${user.id} and name: ${user.profile.name}`
        );
        yield put(loginUser.success(user));
        break;
      }
      default:
        console.error(`Invalid authentication type - ${action.payload.type}`);
        yield put(loginUser.failure());
    }
  } catch (error) {
    yield put(loginUser.failure(error));
  } finally {
    yield put(loginUser.fulfill());
  }
}

function* userWatcher() {
  yield takeEvery(loginUser.TRIGGER, userLoginSaga);
}

export function* userSaga() {
  yield all([userWatcher()]);
}
