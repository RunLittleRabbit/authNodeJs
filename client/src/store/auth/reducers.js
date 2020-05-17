import {
  ADD_TEXT, SIGN_IN, SIGN_IN_FAILED, SIGN_IN_SUCCESS,
} from './actions';


const initialState = {
  text: 'initial text',
  user: {},
  error: '',
  isLoading: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return { ...state, text: action.text };
    case SIGN_IN:
      return { ...state, user: action.values, isLoading: true };
    case SIGN_IN_SUCCESS:
      return { ...state, isLoading: false };
    case SIGN_IN_FAILED:
      return { ...state, isLoading: false, error: action.message };
    default:
      return state;
  }
};

export default auth;
