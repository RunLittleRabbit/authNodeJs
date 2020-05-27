import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    color: '#3f51b5',
    fontWeight: 600,
  },
}));

const SignUp = ({ submit, isLoading }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={{
            name: '', email: '', password: '', password2: '',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.name) {
              errors.name = 'Required';
            }
            if (!values.password) {
              errors.password = 'Required';
            } else if (values.password !== values.password2) {
              errors.password = 'passwords not identical';
            } else if (values.password.length < 6) {
              errors.password = 'password min length 6';
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
            handleBlur,
            touched,
            handleSubmit,

          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="name"
                    type="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    margin="normal"
                    error={errors.name && touched.name}
                    helperText={errors.name && touched.name && errors.name}
                  />
                  <TextField
                    name="email"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    margin="normal"
                    error={errors.email && touched.email}
                    helperText={errors.email && touched.email && errors.email}
                  />
                  <TextField
                    name="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    variant="outlined"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    margin="normal"
                    error={errors.password && touched.password}
                    helperText={errors.password && touched.password && errors.password}
                  />
                  <TextField
                    name="password2"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password2}
                    variant="outlined"
                    required
                    fullWidth
                    id="password2"
                    label="Repeat Password"
                    margin="normal"
                    error={errors.password && touched.password}
                    helperText={errors.password && touched.password2 && errors.password}
                  />
                </Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                size="large"
                disabled={isLoading}
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link className={classes.link} to="/signIn">
                    Already have an account? Sign in
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

SignUp.propTypes = {
  submit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(
  (state) => ({
    isLoading: AuthSelectors.isLoading(state),
  }),
  (dispatch) => ({
    submit: (values) => dispatch(AuthActions.signUp(values)),
  }),
)(SignUp);
