/**
 * Created by 欧阳 超 on 2017/01/16
 */

import { combineReducers } from 'redux';

import {
  ADD_USER,
  DELETE_USER,
  RECEIVE_USERS,
  TOGGLE_FETCHING_USER_STATE,
} from './actions';

const users = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        action.user
      ];
    case DELETE_USER:
      return state.filter((user, idx) => {
        return idx !== action.idx;
      });
    case RECEIVE_USERS:
      return [
        ...state,
        ...action.users,
      ];
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_FETCHING_USER_STATE:
      return !state;
    default:
      return state;
  }
};

const app = combineReducers({ users });

export default app;
