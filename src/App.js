import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import SignIn from './pages/Authorization/SignIn/index';
import SignUp from './pages/Authorization/SignUp/index';
import { authorized, loadUser } from './redux/store';
import Products from './pages/Products/Products';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(authorized);
  const currentUser = JSON.parse(localStorage.currentUser);

  // if (currentUser.name) {
  //   dispatch(loadUser(currentUser.name))
  // }

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
