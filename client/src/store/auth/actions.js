export const ADD_TEXT = 'ADD_TEXT';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED';
export const SIGN_UP = 'SIGN_UP';
export const LOGOUT = 'LOGOUT';

export const signIn = (values) => ({
  type: SIGN_IN,
  values,
});
export const signInSuccess = () => ({
  type: SIGN_IN_SUCCESS,
});
export const signInFailed = () => ({
  type: SIGN_IN_FAILED,
});

export const signUp = (values) => ({
  type: SIGN_UP,
  values,
});

export const logout = (text) => ({
  type: ADD_TEXT,
  text,
});

export const addTodo = (text) => ({
  type: ADD_TEXT,
  text,
});
