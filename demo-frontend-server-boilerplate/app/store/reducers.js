/**
 * Created by 欧阳 超 on 2017/01/16
 */

import { combineReducers } from 'redux';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { createEpicMiddleware } from 'redux-observable';

import {
  ADD_USER,
  DELETE_USER,
  RECEIVE_USERS,
  APP_FETCHING_USER,
  APP_FETCHING_USER_FINISHED,
  receiveUsers,
  appFetchingUserFinished,
} from './actions';

// user reducers
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

const isFetching = (state = {
  fetchingUser: false,
  addingUser: false,
  deletingUser: false,
}, action) => {
  switch (action.type) {
    case APP_FETCHING_USER:
      state.fetchingUser = true;
      return state;
    case APP_FETCHING_USER_FINISHED:
      state.fetchingUser = false;
      return state;
    default:
      return state;
  }
};

// let's mock up some data
// BEGIN
const user1 = {
  name: 'Zhao',
  age: '25'
};
const user2 = {
  name: 'Qiao',
  age: '23'
};
// END

// epics
export const addUserEpic = createEpicMiddleware(action$ =>
  action$.ofType(APP_FETCHING_USER)
    .delay(1e3)
    .flatMap(() =>
      Observable.concat(
        Observable.of(receiveUsers([user1, user2])),
        Observable.of(appFetchingUserFinished())
      )
    )
);

export const app = combineReducers({
  users,
  isFetching,
});
