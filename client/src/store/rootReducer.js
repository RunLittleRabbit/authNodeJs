import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import reducers from './auth/reducers';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  reducers,
});
export default createRootReducer;
