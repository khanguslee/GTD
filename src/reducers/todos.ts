import { ITodoAction, TodoActions } from '../action-creators/actionTypes';
import { Todo, TodoState } from '../models/todos';

export const initialTodoState: TodoState = {
  allIds: [],
  byIds: {},
};

const reducer = (state: TodoState = initialTodoState, action: ITodoAction) => {
  switch (action.type) {
    case TodoActions.FETCH_SUCCESS: {
      const { todos } = action.payload;
      const allIds = todos.map((todo) => todo.id);
      let byIds: { [key: string]: Todo } = {};
      todos.forEach((todo) => {
        byIds[todo.id] = todo;
      });
      return { ...state, allIds, byIds };
    }
    case TodoActions.ADD: {
      const todo = action.payload;
      const { id } = todo;
      return {
        ...state,
        allIds: [id, ...state.allIds],
        byIds: {
          ...state.byIds,
          [id]: action.payload,
        },
      };
    }
    case TodoActions.UPDATE_STATUS: {
      const { id, status } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            status,
          },
        },
      };
    }
  }
  return state;
};

export default reducer;
