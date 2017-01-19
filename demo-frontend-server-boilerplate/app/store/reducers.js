/**
 * Created by 欧阳 超 on 2017/01/16
 */

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';

import {
  ADD_USER,
  DELETE_USER,
  RECEIVE_USERS,
  APP_FETCHING_USER,
  APP_FETCHING_USER_FINISHED,
  APP_ADDING_USER,
  APP_ADDING_USER_FINISHED,
  APP_DELETING_USER,
  APP_DELETING_USER_FINISHED,
  addUser,
  receiveUsers,
  appAddingUserFinished,
  appFetchingUserFinished,
} from './actions';
import * as Api from './_api.config';

// user state reducer
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

// app state reducer
const appUsers = (state = {
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
    case APP_ADDING_USER:
      state.addingUser = true;
      return state;
    case APP_ADDING_USER_FINISHED:
      state.addingUser = false;
      return state;
    case APP_DELETING_USER:
      state.deletingUser = true;
      return state;
    case APP_DELETING_USER_FINISHED:
      state.deletingUser = false;
      return state;
    default:
      return state;
  }
};

// epics
export const fetchingUserEpic = action$ => (
  action$.ofType(APP_FETCHING_USER)
    .switchMap(() =>
      Observable.ajax.get(Api.API_USER)
        .flatMap(payload =>
          Observable.concat(
            Observable.of(receiveUsers(payload.response)),
            Observable.of(appFetchingUserFinished())
          )
        )
    )
);

export const addingUserEpic = action$ => (
  action$.ofType(APP_ADDING_USER)
    .switchMap(action =>
      Observable.ajax.post(Api.API_USER, action.user)
        .map(addUser)
        .mapTo(Observable.of(appAddingUserFinished))
    )
);

export const rootUserEpic = combineEpics(
  fetchingUserEpic,
  addingUserEpic
);

export const userReducers = {
  users,
  appUsers,
};
