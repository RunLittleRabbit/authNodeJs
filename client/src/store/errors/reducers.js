import { ActionTypes } from './actions';

export const initialState = {
  message: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.HANDLE_ERROR:
      return { ...state, message: action.message };
    default:
      return state;
  }
};
