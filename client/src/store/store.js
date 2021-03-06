import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
      ),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
