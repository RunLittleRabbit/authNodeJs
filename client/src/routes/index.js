import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home/home';
import SignIn from '../pages/SignIn/signIn';
import SignUp from '../pages/SignUp/signUp';
import Products from '../pages/Products/products';
import Header from '../components/header';

const routes = (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/products" component={Products} />
    </Switch>
  </>
);

export default routes;
