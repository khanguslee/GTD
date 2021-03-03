import { all, takeEvery } from 'redux-saga/effects';
import { ITodoAction, TodoActions } from '../action-creators/actionTypes';

function* addTodoIntoDatabaseSaga(action: ITodoAction) {
  yield console.log(action);
}

function* todoWatcher() {
  yield takeEvery(TodoActions.ADD, addTodoIntoDatabaseSaga);
}

export function* todosSaga() {
  yield all([todoWatcher()]);
}
