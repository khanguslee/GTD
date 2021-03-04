import { all, put, select, takeEvery, takeLatest } from 'redux-saga/effects';

import { ITodoAddAction, TodoActions } from '../action-creators/actionTypes';
import { fetchTodo } from '../action-creators/todos';
import { getUser } from '../selectors/auth';
import { Todo } from '../models/todos';

function* addTodoIntoDatabaseSaga(action: ITodoAddAction) {
  const user: Realm.User = yield select(getUser);
  // Only add into database if the user is logged in.
  if (!user) return;
  const todo = action.payload;
  yield user.callFunction('addTodo', todo);
}

function* loadExistingTodosSaga() {
  const user: Realm.User = yield select(getUser);
  yield put(fetchTodo.request());
  try {
    // TODO: Implement pagination
    const todos: Todo[] = yield user.callFunction('getAllTodos');
    yield put(fetchTodo.success(todos));
  } catch (error) {
    yield put(fetchTodo.failure(error));
  } finally {
    yield put(fetchTodo.fulfill());
  }
}

function* addTodoWatcher() {
  yield takeEvery(TodoActions.ADD, addTodoIntoDatabaseSaga);
}

function* loginSuccessWatcher() {
  yield takeLatest(fetchTodo.TRIGGER, loadExistingTodosSaga);
}

export function* todosSaga() {
  yield all([addTodoWatcher(), loginSuccessWatcher()]);
}
