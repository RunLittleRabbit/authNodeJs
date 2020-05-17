import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducers from './auth/reducers';

export default combineReducers({
  reducers,
  routing: routerReducer,
});
