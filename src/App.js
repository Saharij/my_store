import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Products from './pages/Products/Products';
import { authorized } from './redux/store';
import SignIn from './pages/Authorization/SignIn/index';
import SignUp from './pages/Authorization/SignUp/index';

function App() {
  const isAuthorized = useSelector(authorized);

  return (
    <div className="app">
      {isAuthorized ? (
        <Switch>
          <Route path="/products" component={Products} />
          <Redirect to="/sign-up" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Redirect to="/sign-in" />
        </Switch>
      )}
    </div>
  );
}

export default App;
