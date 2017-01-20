/**
 * Create by 欧阳 超 on 2017/01/16
 */

// action types
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const APP_FETCHING_USER = 'APP_FETCHING_USER';
export const APP_FETCHING_USER_FINISHED = 'APP_FETCHING_USER_FINISHED';
export const APP_ADDING_USER = 'APP_ADDING_USER';
export const APP_ADDING_USER_FINISHED = 'APP_ADDING_USER_FINISHED';
export const APP_DELETING_USER = 'APP_DELETING_USER';
export const APP_DELETING_USER_FINISHED = 'APP_DELETING_USER_FINISHED';

// data action
export const addUser = (user) => {
  return Object.assign({}, {
    type: ADD_USER,
  }, { user });
};
export const deleteUser = (idx) => {
  return Object.assign({}, {
    type: DELETE_USER,
  }, { idx });
};
export const receiveUsers = (users) => {
  return Object.assign({}, {
    type: RECEIVE_USERS,
  }, { users });
};

// app action
export const appFetchingUser = () => {
  return Object.assign({}, {
    type: APP_FETCHING_USER,
  });
};
export const appFetchingUserFinished = () => {
  return Object.assign({}, {
    type: APP_ADDING_USER_FINISHED
  });
};
export const appAddingUser = (user) => {
  return Object.assign({}, {
    type: APP_ADDING_USER,
  }, { user });
};
export const appAddingUserFinished = () => {
  return Object.assign({}, {
    type: APP_ADDING_USER_FINISHED,
  });
};
export const appDeletingUser = (idx) => {
  return Object.assign({}, {
    type: APP_DELETING_USER,
  }, { idx });
};
export const appDeletingUserFinished = () => {
  return Object.assign({}, {
    type: APP_DELETING_USER_FINISHED,
  });
};
