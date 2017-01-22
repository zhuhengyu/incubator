/**
 * Created by 欧阳 超 on 2017/01/16
 */

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';

import * as _ACTIONS from '../actions/user';
import * as Api from '../api.config';

// user state reducer
const users = (state = [], action) => {

  switch (action.type) {
    case _ACTIONS.ADD_USER:
      return [
        ...state,
        action.user
      ];
    case _ACTIONS.DELETE_USER:
      return state.filter((user) => user.id !== action.id);
    case _ACTIONS.RECEIVE_USERS:
      return [
        ...state,
        ...action.users,
      ];
    case _ACTIONS.MODIFY_USER:
      return state.map((user, id) => id === action.id ? action.user : user);
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
}, action) => {
  // don't edit state directly, Redux needs a new state
  state = Object.assign({}, state);
  switch (action.type) {
    case _ACTIONS.APP_FETCHING_USER:
      state.fetchingUser = true;
      return state;
    case _ACTIONS.APP_FETCHING_USER_FINISHED:
    case _ACTIONS.APP_FETCHING_USER_FAILED:
      state.fetchingUser = false;
      return state;
    case _ACTIONS.APP_ADDING_USER:
      state.addingUser = true;
      return state;
    case _ACTIONS.APP_ADDING_USER_FINISHED:
    case _ACTIONS.APP_ADDING_USER_FAILED:
      state.addingUser = false;
      return state;
    case _ACTIONS.APP_DELETING_USER:
      state.deletingUser = true;
      return state;
    case _ACTIONS.APP_DELETING_USER_FINISHED:
    case _ACTIONS.APP_DELETING_USER_FAILED:
      state.deletingUser = false;
      return state;
    case _ACTIONS.APP_MODIFYING_USER:
      state.modifyingUser = true;
      return state;
    case _ACTIONS.APP_MODIFYING_USER_FINISHED:
    case _ACTIONS.APP_MODIFYING_USER_FAILED:
      state.modifyingUser = false;
      return state;
    default:
      return state;
  }
};

// epics
export const fetchingUserEpic = action$ => (
  action$.ofType(_ACTIONS.APP_FETCHING_USER)
    .switchMap(() =>
      Observable.ajax.get(Api.API_USER)
        .switchMap(payload =>
          Observable.concat(
            Observable.of(_ACTIONS.receiveUsers(payload.response)),
            Observable.of(_ACTIONS.appFetchingUserFinished())
          )
        )
        .catch(error => Observable.of(_ACTIONS.appFetchingUserFailed()))
    )
);
export const addingUserEpic = action$ => (
  action$.ofType(_ACTIONS.APP_ADDING_USER)
    .switchMap(action =>
      Observable.ajax.put(Api.API_USER, action.user)
        .switchMap(payload =>
          Observable.concat(
            Observable.of(_ACTIONS.addUser(payload.response)),
            Observable.of(_ACTIONS.appAddingUserFinished())
          )
        )
        .catch(error => {
          return Observable.of(_ACTIONS.appAddingUserFailed());
        })
    )
);
export const deletingUserEpic = action$ => (
  action$.ofType(_ACTIONS.APP_DELETING_USER)
    .switchMap(action =>
      Observable.ajax.delete(`${Api.API_USER}/${action.id}`, {})
        .switchMap(() =>
          Observable.concat(
            Observable.of(_ACTIONS.deleteUser(action.id)),
            Observable.of(_ACTIONS.appDeletingUserFinished())
          )
        )
        .catch(error => Observable.of(_ACTIONS.appDeletingUserFailed()))
    )
);
export const modifyingUserEpic = action$ => (
  action$.ofType(_ACTIONS.APP_MODIFYING_USER)
    .switchMap(action =>
      Observable.ajax.patch(Api.API_USER, {
        user: action.user
      }).switchMap(() =>
        Observable.concat(
          Observable.of(_ACTIONS.modifyUser(action.id, action.user)),
          Observable.of(_ACTIONS.appModifyingUserFinished())
        ))
        .catch(error => Observable.of(_ACTIONS.appModifyingUserFailed()))
    )
);

export const rootUserEpic = combineEpics(
  fetchingUserEpic,
  addingUserEpic,
  deletingUserEpic,
  modifyingUserEpic
);

export const userReducers = {
  users,
  appUsers,
};
