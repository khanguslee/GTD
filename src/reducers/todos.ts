import { TodoAction, TodoActions } from '../action-creators/actionTypes';
import { TodoState } from '../models/todos';

export const initialTodoState: TodoState = {
  allIds: [],
  byIds: {},
};

const reducer = (state: TodoState = initialTodoState, action: TodoAction) => {
  switch (action.type) {
    case TodoActions.ADD: {
      const { id } = action.payload;
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
