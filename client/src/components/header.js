import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as AuthSelectors from '../store/auth/selectors';
import { actions as AuthActions } from '../store/auth/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
}));

const Header = ({ user, logout }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              Logo
            </Link>
          </Typography>
          <Button color="inherit">
            <Link className={classes.link} to="/signUp">
              Sign Up
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.link} to="/signIn">
              Sign In
            </Link>
          </Button>
          {user && (
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
          )}
          {user && (<Avatar>{user.name[0].toUpperCase()}</Avatar>)}
        </Toolbar>
      </AppBar>
    </div>
  );
};
Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.string),
  logout: PropTypes.func.isRequired,
};
Header.defaultProps = {
  user: null,
};

export default connect(
  (state) => ({
    user: AuthSelectors.shopItemsSelector(state),
  }),
  (dispatch) => ({
    logout: () => dispatch(AuthActions.logout()),
  }),
)(Header);
