/**
 * Create by 欧阳 超 on 2017/01/16
 */

// action types
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const TOGGLE_FETCHING_USER_STATE = 'TOGGLE_FETCHING_USER_STATE';

// actions
export const addUser = (user) => {
  return Object.assign({
    type: ADD_USER,
  }, { user });
};
export const deleteUser = (idx) => {
  return Object.assign({
    type: DELETE_USER,
  }, { idx });
};
export const receiveUsers = (users) => {
  return Object.assign({
    type: RECEIVE_USERS,
  }, { users });
};
export const toggleFetchingUserState = () => {
  return Object.assign({
    type: TOGGLE_FETCHING_USER_STATE,
  });
};