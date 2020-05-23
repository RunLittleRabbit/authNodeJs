export const ActionTypes = {
  HANDLE_ERROR: 'HANDLE_ERROR',
};
export const actions = {
  handleError: (message) => ({
    type: ActionTypes.HANDLE_ERROR,
    message,
  }),
};
