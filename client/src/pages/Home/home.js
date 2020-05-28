import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { actions as AuthActions } from '../../store/auth/actions';

const Home = ({ addText }) => (
  <>
    <div>Home Page...</div>
    <Link to="/products">
      Logo
    </Link>
  </>

);
Home.propTypes = {
  addText: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({ state }),
  (dispatch) => ({
    addText: (text) => dispatch(AuthActions.addTodo(text)),
  }),
)(Home);
