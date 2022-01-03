import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import SignIn from './pages/Authorization/SignIn';
import SignUp from './pages/Authorization/SignUp';
import { authorized } from './redux/store';
import Products from './pages/Products';
import './App.css';

function App() {
  const isAuthorized = useSelector(authorized);

  return (
    <div className="app">
      {isAuthorized ? (
        <Switch>
          <Route path="/products" component={Products} />
          <Redirect to="/404" />
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
