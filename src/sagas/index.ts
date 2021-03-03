import { userSaga } from './user';
import { todosSaga } from './todos';
import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield fork(userSaga);
  yield fork(todosSaga);
}
