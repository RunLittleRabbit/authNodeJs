import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import SignIn from './pages/SignIn/signIn';
import SignUp from './pages/SignUp/signUp';
import Header from './components/header';
import Products from './pages/Products/products';
import Home from './pages/Home/home';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/products" component={Products} />
      </Switch>
    </div>
  </ConnectedRouter>
);

App.propTypes = {
  history: PropTypes.object,
};

export default App;
