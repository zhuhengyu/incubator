/**
 * Create by 欧阳 超 on 2017/01/16
 */

// data action types
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const MODIFY_USER = 'MODIFY_USER';

// app action types for AJAX action
// fetching user
export const APP_FETCHING_USER = 'APP_FETCHING_USER';
export const APP_FETCHING_USER_FINISHED = 'APP_FETCHING_USER_FINISHED';
export const APP_FETCHING_USER_FAILED = 'APP_FETCHING_USER_FAILED';
// adding user
export const APP_ADDING_USER = 'APP_ADDING_USER';
export const APP_ADDING_USER_FINISHED = 'APP_ADDING_USER_FINISHED';
export const APP_ADDING_USER_FAILED = 'APP_ADDING_USER_FAILED';
// deleting user
export const APP_DELETING_USER = 'APP_DELETING_USER';
export const APP_DELETING_USER_FINISHED = 'APP_DELETING_USER_FINISHED';
export const APP_DELETING_USER_FAILED = 'APP_DELETING_USER_FAILED';
// modifying user
export const APP_MODIFYING_USER = 'APP_MODIFYING_USER';
export const APP_MODIFYING_USER_FINISHED = 'APP_MODIFYING_USER_FINISHED';
export const APP_MODIFYING_USER_FAILED = 'APP_MODIFYING_USER_FAILED';

// data action
export const addUser = (user) => {
  return Object.assign({}, {
    type: ADD_USER,
  }, { user });
};
export const deleteUser = (id) => {
  return Object.assign({}, {
    type: DELETE_USER,
  }, { id });
};
export const receiveUsers = (users) => {
  return Object.assign({}, {
    type: RECEIVE_USERS,
  }, { users });
};
export const modifyUser = (user) => {
  return Object.assign({}, {
    type: MODIFY_USER,
  }, { user });
};

// app action
// fetching user list
export const appFetchingUser = () => {
  return Object.assign({}, {
    type: APP_FETCHING_USER,
  });
};
export const appFetchingUserFinished = () => {
  return Object.assign({}, {
    type: APP_FETCHING_USER_FINISHED,
  });
};
export const appFetchingUserFailed = () => {
  return Object.assign({}, {
    type: APP_FETCHING_USER_FAILED,
  });
};
// adding user
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
export const appAddingUserFailed = () => {
  return Object.assign({}, {
    type: APP_ADDING_USER_FAILED,
  });
};
// deleting user
export const appDeletingUser = (id) => {
  return Object.assign({}, {
    type: APP_DELETING_USER,
  }, { id });
};
export const appDeletingUserFinished = () => {
  return Object.assign({}, {
    type: APP_DELETING_USER_FINISHED,
  });
};
export const appDeletingUserFailed = () => {
  return Object.assign({}, {
    type: APP_DELETING_USER_FAILED,
  });
};
// modifying user
export const appModifyingUser = (user) => {
  return Object.assign({}, {
    type: APP_MODIFYING_USER,
  }, { user });
};
export const appModifyingUserFinished = () => {
  return Object.assign({}, {
    type: APP_MODIFYING_USER_FINISHED
  });
};
export const appModifyingUserFailed = () => {
  return Object.assign({}, {
    type: APP_MODIFYING_USER_FAILED,
  });
};