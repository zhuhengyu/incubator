/**
 * Created by 欧阳 超 on 2017/01/16
 */

import { combineReducers } from 'redux';

import * as _ACTION from './actions';

const users = (state = [], action) => {
  switch (action.type) {
    case _ACTION.ADD_USER:
      return [
        ...state,
        action.user
      ];
    case _ACTION.DELETE_USER:
      return state.filter((user) => {
        return user.id !== action.id;
      });
    default:
      return state;
  }
};

const app = combineReducers({ users });

export default app;
