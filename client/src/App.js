import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import SignIn from './pages/SignIn/signIn';
import SignUp from './pages/SignUp/signUp';
import Header from './components/header';
import Products from './pages/Products/products';
import Home from './pages/Home/home';
import rootReducer from './store/index';
import rootSaga from './store/auth/sagas';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history))),
);

sagaMiddleware.run(rootSaga);

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    </Provider>
  </div>
);

export default App;
