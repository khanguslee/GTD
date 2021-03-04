import { all, select, takeEvery } from 'redux-saga/effects';

import { ITodoAction, TodoActions } from '../action-creators/actionTypes';
import { getUser } from '../selectors/auth';

function* addTodoIntoDatabaseSaga(action: ITodoAction) {
  const user: Realm.User = yield select(getUser);
  const todo = action.payload;
  yield user.callFunction('addTodo', todo);
}

function* todoWatcher() {
  yield takeEvery(TodoActions.ADD, addTodoIntoDatabaseSaga);
}

export function* todosSaga() {
  yield all([todoWatcher()]);
}
