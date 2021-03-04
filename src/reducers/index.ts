import { combineReducers } from 'redux';
import todoReducer from './todos';
import authReducer from './auth';

export default combineReducers({
  todos: todoReducer,
  auth: authReducer,
});
