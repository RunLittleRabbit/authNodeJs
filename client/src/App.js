import React from 'react';
import './App.css';
import SignIn from "./pages/signIn/signIn";
import SignUp from "./pages/signUp/signUp";
import Header from "./components/header";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Products from "./pages/Products/products";

const App = () => (
    <div className="App">
      <main>
          <Router>
              <Header/>
              <Switch>
                  <Route exact path="/" component={SignIn} />
                  <Route path="/signUp" component={SignUp} />
                  <Route path="/products" component={Products} />
              </Switch>
          </Router>
      </main>
    </div>
  );

export default App;
