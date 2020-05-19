export const ActionTypes = {
  ADD_TEXT: 'ADD_TEXT',
  SIGN_IN: 'SIGN_IN',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILED: 'SIGN_IN_FAILED',
  SIGN_UP: 'SIGN_UP',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILED: 'SIGN_UP_FAILED',
  LOGOUT: 'LOGOUT',
};
export const actions = {
  signIn: (values) => ({
    type: ActionTypes.SIGN_IN,
    values,
  }),
  signInSuccess: () => ({
    type: ActionTypes.SIGN_IN_SUCCESS,
  }),
  signInFailed: () => ({
    type: ActionTypes.SIGN_IN_FAILED,
  }),
  signUp: (values) => ({
    type: ActionTypes.SIGN_UP,
    values,
  }),
  signUpSuccess: () => ({
    type: ActionTypes.SIGN_IN_SUCCESS,
  }),
  signUpFailed: () => ({
    type: ActionTypes.SIGN_IN_FAILED,
  }),
  logout: () => ({
    type: ActionTypes.ADD_TEXT,
  }),
  addTodo: (text) => ({
    type: ActionTypes.ADD_TEXT,
    text,
  }),
};
