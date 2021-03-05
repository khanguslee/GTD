import { all, put, select, takeEvery, takeLatest } from 'redux-saga/effects';

import {
  ITodoAddAction,
  ITodoDeleteAction,
  ITodoSetStatusAction,
  TodoActions,
} from '../action-creators/actionTypes';
import { deleteTodo, fetchTodo } from '../action-creators/todos';
import { getUser } from '../selectors/auth';
import { Todo } from '../models/todos';

function* addTodoIntoDatabaseSaga(action: ITodoAddAction) {
  const user: Realm.User = yield select(getUser);
  // Only add into database if the user is logged in.
  if (!user) return;
  const todo = action.payload;
  yield user.callFunction('addTodo', todo);
}

function* updateTodoSaga(action: ITodoSetStatusAction) {
  const user: Realm.User = yield select(getUser);
  if (!user) return;
  const todo = action.payload;
  yield user.callFunction('updateTodo', todo);
}
function* deleteTodoInDatabaseSaga(action: ITodoDeleteAction) {
  const user: Realm.User = yield select(getUser);
  if (!user) return;
  const todo = action.payload;
  yield user.callFunction('deleteTodo', todo);
}

function* loadExistingTodosSaga() {
  const user: Realm.User = yield select(getUser);
  if (!user) return;
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

function* updateTodoWatcher() {
  yield takeEvery(TodoActions.UPDATE_STATUS, updateTodoSaga);
}

function* deleteTodoWatcher() {
  yield takeEvery(deleteTodo.TRIGGER, deleteTodoInDatabaseSaga);
}

function* loginSuccessWatcher() {
  yield takeLatest(fetchTodo.TRIGGER, loadExistingTodosSaga);
}

export function* todosSaga() {
  yield all([
    addTodoWatcher(),
    loginSuccessWatcher(),
    updateTodoWatcher(),
    deleteTodoWatcher(),
  ]);
}
