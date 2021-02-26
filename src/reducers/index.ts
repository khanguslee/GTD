import { combineReducers } from 'redux';
import todoReducer from './todos';

export default combineReducers({
  todos: todoReducer,
});
