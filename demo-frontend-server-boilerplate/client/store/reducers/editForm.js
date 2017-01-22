/**
 * Created by 欧阳 超 on 2017/01/22
 */

import {
  LOAD_USER_EDIT_FORM,
  CLEAR_USER_EDIT_FORM,
} from '../actions/editForm';

export const editForm = (state = {
  userForm: {},
}, action) => {
  state = Object.assign({}, state);
  switch (action.type) {
    case LOAD_USER_EDIT_FORM:
      state.userForm = action.user;
      return state;
    case CLEAR_USER_EDIT_FORM:
      state.userForm = {};
      return state;
    default:
      return state;
  }
};

export const editFormReducers = {
  editForm,
};