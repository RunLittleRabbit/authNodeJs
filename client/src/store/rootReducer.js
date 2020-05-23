import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as auth } from './auth';
import { reducer as errorHandler } from './errors';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth,
  errorHandler,
});
export default createRootReducer;
