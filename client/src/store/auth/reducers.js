import { ActionTypes } from './actions';

export const initialState = {
  text: 'initial text',
  user: {},
  error: '',
  isLoading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TEXT:
      return { ...state, text: action.text };
    case ActionTypes.SIGN_IN:
      return { ...state, isLoading: true };
    case ActionTypes.SIGN_IN_SUCCESS:
      return { ...state, user: action.values, isLoading: false };
    case ActionTypes.SIGN_IN_FAILED:
      return { ...state, isLoading: false, error: action.message };
    case ActionTypes.SIGN_UP:
      return { ...state, isLoading: true };
    case ActionTypes.SIGN_UP_SUCCESS:
      return { ...state, isLoading: false };
    case ActionTypes.SIGN_UP_FAILED:
      return { ...state, isLoading: false, error: action.message };
    default:
      return state;
  }
};
