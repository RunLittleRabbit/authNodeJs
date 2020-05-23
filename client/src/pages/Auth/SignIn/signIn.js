import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions as AuthActions } from '../../../store/auth/actions';
import { AuthSelectors } from '../../../store/auth';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'ghostwhite',
    marginTop: theme.spacing(8),
    padding: theme.spacing(4),
    borderRadius: '5px',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    color: '#3f51b5',
    fontWeight: 600,
  },
}));

const SignIn = ({ submit, isLoading }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Required';
            }

            return errors;
          }}
          onSubmit={(values) => {
            submit(values);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            handleBlur,
            touched,
          }) => (
            <form onSubmit={handleSubmit} className={classes.form}>
              <TextField
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={errors.email && touched.email}
                helperText={errors.email && touched.email && errors.email}
                autoFocus
                required
              />
              <TextField
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={errors.password && touched.password}
                helperText={errors.password && touched.password && errors.password}
                required
              />
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                size="large"
                disabled={isLoading}
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link className={classes.link} to="#">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link className={classes.link} to="signUp">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </div>
    </Container>
  );
};
SignIn.propTypes = {
  submit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(
  (state) => ({
    isLoading: AuthSelectors.isLoading(state),
  }),
  (dispatch) => ({
    submit: (values) => dispatch(AuthActions.signIn(values)),
  }),
)(SignIn);
