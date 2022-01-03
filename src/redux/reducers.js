import { combineReducers } from 'redux';

export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';

const user = (state = '', action) => {
  switch (action.type) {
    case 'LOAD_USER_SUCCESS':
      return action.data;

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: user
});

export default rootReducer;
