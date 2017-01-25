/**
 * Created by 欧阳 超 on 2017/01/16
 */

import 'rxjs/Rx';
import { handleActions, combineActions } from 'redux-actions';
import { List, Map } from 'immutable';
import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';
import { reset } from 'redux-form';

import * as _ACTIONS from '../actions/user';
import * as _EDITFORM_ACTION from '../actions/editForm';
import * as Api from '../api.config';

// user state reducer
const users = handleActions({
  [_ACTIONS.RECEIVE_USERS]: (state, action) => state.merge(action.payload),
  [_ACTIONS.ADD_USER]: (state, action) => state.push(Map(action.payload)),
  [_ACTIONS.DELETE_USER]: (state, action) => state.filter(user => user.get('id') !== action.payload),
  [_ACTIONS.MODIFY_USER]: (state, action) => state.map(user => user.get('id') === action.payload.id ? Map(action.payload) : user),
}, List([]));

// app state reducer
const users_ = handleActions({
  [_ACTIONS.APP_FETCHING_USER]: state => state.set('fetchingUser', true),
  [combineActions(_ACTIONS.APP_FETCHING_USER_FAILED, _ACTIONS.APP_FETCHING_USER_FULFILLED)]: state => state.set('fetchingUser', false),
  [_ACTIONS.APP_ADDING_USER]: state => (state.set('addingUser', true)),
  [combineActions(_ACTIONS.APP_ADDING_USER_FAILED, _ACTIONS.APP_ADDING_USER_FULFILLED)]: state => state.set('addingUser', false),
  [_ACTIONS.APP_DELETING_USER]: state => (state.set('deletingUser', true)),
  [combineActions(_ACTIONS.APP_DELETING_USER_FAILED, _ACTIONS.APP_DELETING_USER_FULFILLED)]: state => state.set('deletingUser', false),
  [_ACTIONS.APP_MODIFYING_USER]: state => (state.set('modifyUser', true)),
  [combineActions(_ACTIONS.APP_MODIFYING_USER_FAILED, _ACTIONS.APP_MODIFYING_USER_FULFILLED)]: state => state.set('modifyUser', false),
}, Map({
  fetchingUser: false,
  addingUser: false,
  deletingUser: false,
  modifyingUser: false,
}));

// export user reducers
export const userReducers = {
  users,
  users_,
};

// epics
export const fetchingUserEpic = action$ => (
  action$.ofType(_ACTIONS.APP_FETCHING_USER)
    .switchMap(() =>
      Observable.ajax.get(Api.API_USER)
        .switchMap(payload =>
          Observable.concat(
            Observable.of(_ACTIONS.receiveUsers(payload.response)),
            Observable.of(_ACTIONS.appFetchingUserFulfilled())
          )
        )
        .catch(() => Observable.of(_ACTIONS.appFetchingUserFailed()))
    )
);
export const addingUserEpic = action$ => (
  action$.ofType(_ACTIONS.APP_ADDING_USER)
    .switchMap(action =>
      Observable.ajax.put(Api.API_USER, action.payload)
        .switchMap(payload =>
          Observable.concat(
            Observable.of(_ACTIONS.addUser(payload.response.user)),
            Observable.of(_ACTIONS.appAddingUserFulfilled()),
            Observable.of(reset('userAddForm'))
          )
        )
        .catch(() => Observable.of(_ACTIONS.appAddingUserFailed()))
    )
);
export const deletingUserEpic = action$ => (
  action$.ofType(_ACTIONS.APP_DELETING_USER)
    .switchMap(action =>
      Observable.ajax.delete(`${Api.API_USER}/${action.payload}`)
        .switchMap(payload =>
          Observable.concat(
            Observable.of(_ACTIONS.deleteUser(payload.response.id)),
            Observable.of(_ACTIONS.appDeletingUserFulfilled())
          )
        )
        .catch(() => Observable.of(_ACTIONS.appDeletingUserFailed()))
    )
);
export const modifyingUserEpic = action$ => (
  action$.ofType(_ACTIONS.APP_MODIFYING_USER)
    .switchMap(action =>
      Observable.ajax.post(Api.API_USER, action.payload)
        .switchMap(payload =>
          Observable.concat(
            Observable.of(_ACTIONS.modifyUser(payload.response.user)),
            Observable.of(_ACTIONS.appModifyingUserFulfilled()),
            Observable.of(_EDITFORM_ACTION.loadUserEditForm({})),
            Observable.of(reset('userEditForm'))
          )
        )
        .catch(() => Observable.of(_ACTIONS.appModifyingUserFailed()))
    )
);

// export user epics
export const rootUserEpic = combineEpics(
  fetchingUserEpic,
  addingUserEpic,
  deletingUserEpic,
  modifyingUserEpic
);
