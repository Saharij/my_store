import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');

  middlewares.push(logger);
}

// eslint-disable-next-line import/prefer-default-export
export const configureStore = preLoadedState => createStore(
  reducers,
  preLoadedState,
  applyMiddleware(...middlewares),
);
