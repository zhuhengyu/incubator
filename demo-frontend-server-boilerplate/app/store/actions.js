/**
 * Create by 欧阳 超 on 2017/01/16
 */

// user actions
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

export const addUser = (user) => {
  return Object.assign({
    type: ADD_USER,
  }, {
    user,
  });
};

export const deleteUser = (id) => {
  return Object.assign({
    type: DELETE_USER,
  }, {
    id,
  });
};
