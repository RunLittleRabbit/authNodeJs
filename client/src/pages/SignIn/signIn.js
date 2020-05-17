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
import { signIn } from '../../store/auth/actions';

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
}));

const SignIn = ({ submit }) => {
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
          onSubmit={(values, actions) => {
            // axios.post(`${apiUrl}/users/login`, values)
            //   .then((response) => {
            //     console.log('res', response);
            //     props.history.push('/products');
            //   })
            //   .catch((error) => {
            //     console.log('err', error);
            //     actions.setSubmitting(false);
            //   });
            // setTimeout(() => {
            //   axios.get(`${apiUrl}/users/getData`)
            //     .then((res) => console.log(res));
            // }, 2000);
            submit(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                onChange={handleChange}
                value={values.email}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                required
              />
              {errors.email && touched.email && errors.email}
              <TextField
                variant="outlined"
                margin="normal"
                onChange={handleChange}
                value={values.password}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                required
              />
              {errors.password && touched.password && errors.password}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={Object.keys(errors).length !== 0 || isSubmitting}
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="signUp" variant="body2">
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
};

export default connect(
  (state) => ({ state }),
  (dispatch) => ({
    submit: (values) => dispatch(signIn(values)),
  }),
)(SignIn);
