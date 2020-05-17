import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import routes from './routes';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    {routes}
  </ConnectedRouter>
);

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
