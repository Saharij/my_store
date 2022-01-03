import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers, { LOAD_USER_SUCCESS } from './reducers';

export const user = (state) => state.user;
export const authorized = (state) => !!state.user;

export const loadUser = (fullname) => {
  return { type: LOAD_USER_SUCCESS, data: fullname };
};

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');

  middlewares.push(logger);
}

// eslint-disable-next-line import/prefer-default-export
export const configureStore = () => createStore(
  reducers,
  applyMiddleware(...middlewares),
);
