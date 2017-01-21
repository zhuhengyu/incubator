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
  MODIFY_USER,
  APP_FETCHING_USER,
  APP_FETCHING_USER_FINISHED,
  APP_ADDING_USER,
  APP_ADDING_USER_FINISHED,
  APP_DELETING_USER,
  APP_DELETING_USER_FINISHED,
  APP_LOAD_USER_MODIFIER,
  APP_MODIFYING_USER,
  APP_MODIFYING_USER_FINISHED,
  addUser,
  deleteUser,
  receiveUsers,
  modifyUser,
  appAddingUserFinished,
  appFetchingUserFinished,
  appDeletingUserFinished,
  appLoadUserModifier,
  appModifyingUserFinished,
} from '../actions/user';
import * as Api from '../api.config';

// user state reducer
const users = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        action.user
      ];
    case DELETE_USER:
      return state.filter((user, idx) => idx !== action.idx);
    case RECEIVE_USERS:
      return [
        ...state,
        ...action.users,
      ];
    case MODIFY_USER:
      return state.map((user, idx) => idx === action.idx ? action.user : user);
    default:
      return state;
  }
};

// app state reducer
const appUsers = (state = {
  fetchingUser: false,
  addingUser: false,
  deletingUser: false,
  modifyingUser: false,
  modifyIdx: -1,
}, action) => {
  // don't edit state directly, Redux needs a new state
  state = Object.assign({}, state);
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
    case APP_LOAD_USER_MODIFIER:
      state.modifyIdx = action.modifyIdx;
      return state;
    case APP_MODIFYING_USER:
      state.modifyingUser = true;
      return state;
    case APP_MODIFYING_USER_FINISHED:
      state.modifyingUser = false;
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
        .switchMap(payload =>
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
      Observable.ajax.put(Api.API_USER, action.user)
        .switchMap(() =>
          Observable.concat(
            Observable.of(addUser(action.user)),
            Observable.of(appAddingUserFinished())
          )
        )
    )
);
export const deletingUserEpic = action$ => (
  action$.ofType(APP_DELETING_USER)
    .switchMap(action =>
      Observable.ajax.delete(Api.API_USER, {
        idx: action.idx
      }).switchMap(() =>
        Observable.concat(
          Observable.of(deleteUser(action.idx)),
          Observable.of(appDeletingUserFinished())
        ))
    )
);
export const modifyingUserEpic = action$ => (
  action$.ofType(APP_MODIFYING_USER)
    .switchMap(action =>
      Observable.ajax.patch(Api.API_USER, {
        user: action.user
      }).switchMap(() =>
        Observable.concat(
          Observable.of(modifyUser(action.idx, action.user)),
          Observable.of(appModifyingUserFinished()),
          Observable.of(appLoadUserModifier(-1))
        ))
    )
);

export const rootUserEpic = combineEpics(
  fetchingUserEpic,
  addingUserEpic,
  deletingUserEpic
);

export const userReducers = {
  users,
  appUsers,
};
