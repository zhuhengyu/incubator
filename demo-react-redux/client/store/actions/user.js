/**
 * Create by 欧阳 超 on 2017/01/16
 */

import { createAction, createActions } from 'redux-actions';

// data action types
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const MODIFY_USER = 'MODIFY_USER';

// app action types for AJAX action
// fetching user
export const APP_FETCHING_USER = 'APP_FETCHING_USER';
export const APP_FETCHING_USER_FAILED = 'APP_FETCHING_USER_FAILED';
export const APP_FETCHING_USER_FULFILLED = 'APP_FETCHING_USER_FULFILLED';
// adding user
export const APP_ADDING_USER = 'APP_ADDING_USER';
export const APP_ADDING_USER_FAILED = 'APP_ADDING_USER_FAILED';
export const APP_ADDING_USER_FULFILLED = 'APP_ADDING_USER_FULFILLED';
// deleting user
export const APP_DELETING_USER = 'APP_DELETING_USER';
export const APP_DELETING_USER_FAILED = 'APP_DELETING_USER_FAILED';
export const APP_DELETING_USER_FULFILLED = 'APP_DELETING_USER_FULFILLED';
// modifying user
export const APP_MODIFYING_USER = 'APP_MODIFYING_USER';
export const APP_MODIFYING_USER_FAILED = 'APP_MODIFYING_USER_FAILED';
export const APP_MODIFYING_USER_FULFILLED = 'APP_MODIFYING_USER_FULFILLED';

// data action
export const addUser = createAction(ADD_USER, user => user);
export const deleteUser = createAction(DELETE_USER, id => id);
export const modifyUser = createAction(MODIFY_USER, user => user);
export const receiveUsers = createAction(RECEIVE_USERS, users => users);

// app action
// fetching user list
export const {
  appFetchingUser,
  appFetchingUserFailed,
  appFetchingUserFulfilled,
} = createActions(
  APP_FETCHING_USER,
  APP_FETCHING_USER_FAILED,
  APP_FETCHING_USER_FULFILLED
);
// adding user
export const {
  appAddingUser,
  appAddingUserFailed,
  appAddingUserFulfilled,
} = createActions({
  APP_ADDING_USER: user => user,
}, APP_ADDING_USER_FAILED, APP_ADDING_USER_FULFILLED);
// deleting user
export const {
  appDeletingUser,
  appDeletingUserFailed,
  appDeletingUserFulfilled,
} = createActions({
  APP_DELETING_USER: id => id,
}, APP_DELETING_USER_FAILED, APP_DELETING_USER_FULFILLED);
// modifying user
export const {
  appModifyingUser,
  appModifyingUserFailed,
  appModifyingUserFulfilled,
} = createActions({
  APP_MODIFYING_USER: user => user,
}, APP_MODIFYING_USER_FAILED, APP_MODIFYING_USER_FULFILLED);