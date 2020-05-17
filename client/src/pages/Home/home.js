import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../../store/auth/actions';

const Home = ({ addText }) => (
  <>
    <div>Home Page...</div>
    <button type="button" onClick={() => addText('new text here')}>click me</button>
  </>

);
Home.propTypes = {
  addText: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({ state }),
  (dispatch) => ({
    addText: (text) => dispatch(addTodo(text)),
  }),
)(Home);
